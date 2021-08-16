// TODO: Euro coins are denominated as follows: 1, 2, 5, 10, 20 and 50 cent, €1 and €2. Given this, how many different ways can change be made for a €5 note? Write a program to answer this question.

const word1 = "orchestra",
  word2 = "carthorse",
  word3 = "rail safety",
  word4 = "fairy tales",
  word5 = "not an anagram",
  word6 = "seriously";

//* Method 1
const anagram = (word1, word2) => {
  return word1.split("").sort().join("") === word2.split("").sort().join("");
};

console.log(
  "anagram -",
  anagram(word1, word2),
  ",",
  anagram(word3, word4),
  ",",
  anagram(word5, word6)
);

//* Method 2
const anagram2 = (word1, word2) => {
  let hash = {};
  for (let letter of word1) {
    hash[letter] = -~hash[letter];
  }
  for (let letter of word2) {
    if (!hash[letter]) {
      return false;
    }
    hash[letter]--;
  }
  return true;
};

console.log(
  "anagram2 -",
  anagram2(word1, word2),
  ",",
  anagram(word3, word4),
  ",",
  anagram(word5, word6)
);
