// TODO: Euro coins are denominated as follows: 1, 2, 5, 10, 20 and 50 cent, €1 and €2. Given this, how many different ways can change be made for a €5 note? Write a program to answer this question.

const word1 = "orchestra",
  word2 = "carthorse",
  word3 = "rail safety",
  word4 = "fairy tales";

//* Method 1
const anagram = (word1, word2) => {
  return word1.split("").sort().join("") === word2.split("").sort().join("");
};

console.log("anagram -", anagram(word1, word2), ", ", anagram(word3, word4));
