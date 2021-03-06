// TODO: An anagram is a word or phrase formed by rearranging the letters of a different word or phrase irrespective of spaces. For example, "orchestra" and "carthorse." Another example is "rail safety" and  "fairy tales." Given two words or phrases, determine if they're anagrams of each other.
// Initial thought process: I have done this algorithm before. I can either sort the strings and check if they're equal or create a hash table for it. Ez pz.

const word1 = "orchestra",
  word2 = "carthorse",
  word3 = "rail safety",
  word4 = "fairy tales",
  word5 = "not an anagram",
  word6 = "seriously";

//* Method 1
// Split the strings to prep for sorting
// Sort the array
// Turn array into string
// If equal, must be anagram

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
// Create a frequency hash table
// Loop through the first word, and input the frequency in the hash
// loop through the second word
// if letter doesn't exist, return false
// subtract one from frequency
// return true if loop is completed without triggering return false

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
