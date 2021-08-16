//* Given a 4x4 matrix of letters chosen randomly from A-Z (with replacement), and a list L of english words (you can use any words you’d like). Write a program to output all the words present in the matrix per the rules of Boggle. Your program should be able to accept pre-set 4x4 matrices and word lists in a reasonable (text-based) format of your choosing.

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const size = 4;
const wordsList = ["cat", "what", "words", "alarm"];

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

const boggle = (size, wordsList, preset) => {
  let matrix = [],
    results = [];
  !preset ? (matrix = generateMatrix(size)) : (matrix = preset);
  let words = wordsList.filter((e) => e.length > 3);
  console.log(words);
};

boggle(4, wordsList);
