//* Given a 4x4 matrix of letters chosen randomly from A-Z (with replacement), and a list L of english words (you can use any words you’d like). Write a program to output all the words present in the matrix per the rules of Boggle. Your program should be able to accept pre-set 4x4 matrices and word lists in a reasonable (text-based) format of your choosing.

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // An array of alphabets
const size = 4; // size of the square matrix
const wordsList = ["cats", "what", "words", "alarm"]; // list of words to check
const presetMatrix = [
  ["C", "A", "T", "S"],
  ["H", "L", "A", "M"],
  ["A", "W", "O", "R"],
  ["D", "S", "D", "M"],
]; // preset matrix -- could be used in boggle search if desired

// helper function to generate the matrix from size and fill them with random alphabets (with replacement)
const generateMatrix = (size) => {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push([]);
    for (let j = 0; j < size; j++) {
      const randomLetter =
        alphabets[Math.floor(Math.random() * alphabets.length)];
      matrix[i].push(randomLetter);
    }
  }
  return matrix;
};

// function to check if an array is included in another array
// Citation, bless this SO: https://stackoverflow.com/questions/64303074/check-if-an-array-includes-an-array-in-javascript
const includesArray = (data, arr) => {
  return data.some(
    (e) => Array.isArray(e) && e.every((o, i) => Object.is(arr[i], o))
  );
};

// helper function to search the word in the matrix
const searchWord = (matrix, r, c, word, visited = []) => {
  if (r < 0 || r > matrix.length - 1 || c < 0 || c > matrix.length - 1) {
    // check for out of bounds
    return false;
  } else if (includesArray(visited, [r, c])) {
    // check if the coords have been visited
    return false;
  } else {
    const matrixLetter = matrix[r][c],
      firstLetter = word[0].toUpperCase();

    if (matrixLetter !== firstLetter) {
      // check if the letter in the matrix is the same as the first letter of the word
      return false;
    } else {
      if (word.length === 1) {
        // if last letter in word, return true because the word has been found
        return true;
      }

      // add coords into visited before recursion so visited coords are tracked
      visited.push([r, c]);

      // remove the first letter of the word put into the recursion
      let newWord = word.slice(1);

      // recusion calls for all 8 directions
      const topLeft = searchWord(matrix, r - 1, c - 1, newWord, visited);
      const top = searchWord(matrix, r, c - 1, newWord, visited);
      const topRight = searchWord(matrix, r - 1, c + 1, newWord, visited);
      const right = searchWord(matrix, r, c + 1, newWord, visited);
      const bottomRight = searchWord(matrix, r + 1, c + 1, newWord, visited);
      const bottom = searchWord(matrix, r + 1, c, newWord, visited);
      const bottomLeft = searchWord(matrix, r + 1, c - 1, newWord, visited);
      const left = searchWord(matrix, r, c - 1, newWord, visited);

      return (
        topLeft ||
        top ||
        topRight ||
        right ||
        bottomRight ||
        bottom ||
        bottomLeft ||
        left
      );
    }
  }
};

// main function
const boggle = (size, wordsList, preset) => {
  let matrix = [],
    results = new Set();

  // Check if there's preset matrix
  if (preset) {
    matrix = preset;
  } else {
    matrix = generateMatrix(size);
  }

  console.log(matrix);

  // Only use words that are more than 2 letters long
  wordsList = wordsList.filter((e) => e.length > 2);

  for (let word of wordsList) {
    let queue = []; // an array to store first coords

    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
        if (matrix[r][c] === word[0].toUpperCase()) {
          queue.push([r, c]);
        }
      }
    }

    while (queue.length > 0) {
      const current = queue.shift();
      const found = searchWord(matrix, current[0], current[1], word);
      if (found) {
        results.add(word);
      }
    }
  }

  return [...results];
};

console.log(boggle(4, wordsList, presetMatrix), boggle(4, wordsList));

//! Search History
// https://www.boggle.online/
// https://stackoverflow.com/questions/64303074/check-if-an-array-includes-an-array-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

//! People consulted
// Friend, cohort colleague, project colleague: Adrian Mendez http://adrianmendez.me/
