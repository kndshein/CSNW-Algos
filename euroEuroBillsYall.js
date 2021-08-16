// TODO: Euro coins are denominated as follows: 1, 2, 5, 10, 20 and 50 cent, €1 and €2. Given this, how many different ways can change be made for a €5 note? Write a program to answer this question.
// Initial thought process: The higher denomination can be made up of lower denomination. For instance, 2 cents can be one 2 cents or two 1 cents; 5 cents can be two 2 cents and one 1 cent, which is just five 1 cent. Seems like a permutation problem.

const bills = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2];
const note = 20;

//* Method 1
// Create a array to host the largest combination
// While the combination doesn't make up the amount, loop through the bills and add to the combination array

const euroBills = (amount) => {
  let combination = [],
    counter = bills.length - 1;

  while (amount > 0) {
    let quotient = Math.floor(amount / bills[counter]);
    amount = amount % bills[counter];
    for (let i = 0; i < quotient; i++) {
      combination.push(bills[counter]);
    }
    counter--;
  }
};

euroBills(note);

{
  one: {
    [1];
  } // 1
  two: {
    [2], [1, 1];
  } // 2
  five: {
    [5], [2, 2, 1], [2, 1, 1, 1], [1, 1, 1, 1, 1];
  } // 4
  ten: {
    [10],
      [5, 5],
      [5, 2, 2, 1],
      [5, 2, 1, 1, 1],
      [5, 1, 1, 1, 1, 1],
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 1, 1],
      [2, 2, 2, 1, 1, 1, 1],
      [2, 2, 1, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  } // 11
  twenty: {
    [20],
      [10, 10],
      [10, 5, 5],
      [5, 5, 5, 5],
      [5, 5, 5, 2, 2, 1],
      [5, 5, 5, 2, 1, 1, 1],
      [5, 5, 5, 1, 1, 1, 1, 1],
      [5, 5, 2, 2, 1, 1, 1, 1, 1, 1],
      [5, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [5, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  } // 16
}

//! Search History
("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce");
