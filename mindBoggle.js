//* Given a 4x4 matrix of letters chosen randomly from A-Z (with replacement), and a list L of english words (you can use any words you’d like). Write a program to output all the words present in the matrix per the rules of Boggle. Your program should be able to accept pre-set 4x4 matrices and word lists in a reasonable (text-based) format of your choosing.

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const size = 4;
const wordsList = ["cat", "what", "words", "alarm"];

const generateMatrix = (matrix, size) => {
  for (let i = 0; i < size; i++) {
    matrix.push([]);
    for (let j = 0; j < size; j++) {
      const randomLetter =
        alphabets[Math.floor(Math.random() * alphabets.length)];
      matrix[i].push(randomLetter);
    }
  }
};

const searchWord = (matrix, r, c, word, visited = new Set()) => {
  if (r < 0 || r > matrix.length - 1 || c < 0 || c > matrix.length - 1) {
    return false;
  } else if (visited.has([r, c])) {
    return false;
  } else {
    const matrixLetter = matrix[r][c],
      firstLetter = word[0].toUpperCase();
    if (matrixLetter !== firstLetter) {
      return false;
    } else {
      if (word.length === 1) {
        return true;
      }

      visited.add([r, c]);

      let newWord = word.slice(1);

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

const boggle = (size, wordsList, preset) => {
  let matrix = [],
    results = new Set();

  // Check if there's preset matrix
  if (preset) {
    matrix = preset;
  } else {
    generateMatrix(matrix, size);
  }

  wordsList = wordsList.filter((e) => e.length > 3);

  for (let word of wordsList) {
    let queue = [];

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
      console.log(found);
      if (found) {
        results.add(word);
      }
    }
  }

  return [...results];
};

console.log(
  boggle(4, wordsList, [
    ["C", "A", "T", "S"],
    ["H", "L", "A", "M"],
    ["A", "W", "O", "R"],
    ["D", "S", "D", "M"],
  ])
);

//! Search History
("https://www.boggle.online/");
