'use strict';

/////////////////////////////////////
/* Problem 1
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, check the console to see if the test passes.*/

function sum(a, b) {
  let sumResult = a + b;
  let message = `The sum of ${a} and ${b} is ${sumResult}.`;
  return [sumResult, message];
}

// Test the sum function
testSum(4, 7);

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, check the console to see if the test passes.*/

function multiply(a, b) {
  let productResult = a * b;
  let message = `The product of ${a} and ${b} is ${productResult}.`;
  return [productResult, message];
}

// Test the multiply function
testMultiply(5, 9);

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers, and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

Test this function by hand in the console to get it working, and when you think it is finished, check the console to see if the test passes.*/

function sumAndMultiply(a, b, c) {
  let sumResult = sum(sum(a, b)[0], c)[0];
  let productResult = multiply(multiply(a, b)[0], c)[0];
  let sumMessage = `${a} and ${b} and ${c} sum to ${sumResult}.`;
  let productMessage = `The product of ${a} and ${b} and ${c} is ${productResult}.`;
  return [sumResult, productResult, sumMessage, productMessage];
}

// Test the sumAndMultiply function
testSumAndMultiply(4, 7, 5);

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

Test this function by hand in the console to get it working, and when you think it is finished, check the console to see if the test passes.*/

function sumArray(sumArr) {
  let sumResult = 0;
  for (let number of sumArr) {
    sumResult = sum(sumResult, number)[0];
  }
  let numbersString = sumArr.join(',');
  let message = `${numbersString} was passed in as an array of numbers, and ${sumResult} is their sum.`;
  return [sumResult, message];
}

// Test the sumArray function
testSumArray([2, 3, 4]);

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

Test this function by hand in the console to get it working, and when you think it is finished, check the console to see if the test passes.*/

function multiplyArray(multArr) {
  let productResult = 1;
  for (let number of multArr) {
    productResult = multiply(productResult, number)[0];
  }
  let numbersString = multArr.join(',');
  let message = `The numbers ${numbersString} have a product of ${productResult}.`;
  return [productResult, message];
}

// Test the multiplyArray function
testMultiplyArray([2, 3, 4]);

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

Test this function by hand in the console to get it working, and when you think it is finished, check the console to see if the test passes.*/

function multiplyAnyArray(dynamicArray) {
  let productResult = 1;
  for (let number of dynamicArray) {
    productResult = multiply(productResult, number)[0];
  }
  let numbersString = dynamicArray.join(',');
  let message = `The numbers ${numbersString} have a product of ${productResult}.`;
  return [productResult, message];
}

// Test the multiplyAnyArray function
