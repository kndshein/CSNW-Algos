//* Given a 4x4 matrix of letters chosen randomly from A-Z (with replacement), and a list L of english words (you can use any words you’d like). Write a program to output all the words present in the matrix per the rules of Boggle. Your program should be able to accept pre-set 4x4 matrices and word lists in a reasonable (text-based) format of your choosing.

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const size = 4;
const wordsList = ["cat", "what", "words", "alarm"];

const generateMatrix = (matrix, size, coords) => {
  for (let i = 0; i < size; i++) {
    matrix.push([]);
    for (let j = 0; j < size; j++) {
      const randomLetter =
        alphabets[Math.floor(Math.random() * alphabets.length)];
      matrix[i].push(randomLetter);
      if (coords[randomLetter]) {
        coords[randomLetter].push([i, j]);
      } else {
        coords[randomLetter] = [[i, j]];
      }
    }
  }
};

const getCoords = (matrix, coords) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (coords[matrix[i][j]]) {
        coords[matrix[i][j]].push([i, j]);
      } else {
        coords[matrix[i][j]] = [[i, j]];
      }
    }
  }
};

const boggle = (size, wordsList, preset) => {
  let matrix = [],
    results = [],
    coords = {};

  // Check if there's preset matrix
  if (preset) {
    matrix = preset;
    getCoords(matrix, coords);
  } else {
    generateMatrix(matrix, size, coords);
  }

  wordsList = wordsList.filter((e) => e.length > 3);
  console.log(matrix, coords);
};

boggle(4, wordsList, [
  ["V", "R", "Y", "B"],
  ["O", "F", "U", "M"],
  ["A", "K", "P", "T"],
  ["D", "M", "J", "U"],
]);
