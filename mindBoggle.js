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

const boggle = (size, wordsList, preset) => {
  let matrix = [],
    results = [];

  // Check if there's preset matrix
  if (preset) {
    matrix = preset;
  } else {
    generateMatrix(matrix, size);
  }

  wordsList = wordsList.filter((e) => e.length > 3);

  for (let word of wordsList) {
    let queue = [];

    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[0].length; x++) {
        if (matrix[y][x] === word[0].toUpperCase()) {
          queue.push([y, x]);
        }
      }
    }

    while (queue.length > 0) {
      const current = queue.shift();
      const found = searchWord(matrix, current[0], current[1], word);
    }
  }
};

boggle(4, wordsList, [
  ["C", "A", "T", "S"],
  ["H", "L", "A", "M"],
  ["A", "W", "O", "R"],
  ["D", "S", "D", "M"],
]);

//! Search History
("https://www.boggle.online/");
