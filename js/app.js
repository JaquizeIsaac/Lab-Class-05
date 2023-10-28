'use strict';

/////////////////////////////////////
/* Problem 1
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

function sum(a, b) {
  let sumResult = a + b;
  let message = `The sum of ${a} and ${b} is ${sumResult}.`;
  return [sumResult, message];
}

// Uncomment this line to test sum()
// testSum(4, 7);

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

function multiply(a, b) {
  let productResult = a * b;
  let message = `The product of ${a} and ${b} is ${productResult}.`;
  return [productResult, message];
}

// Uncomment this line to test multiply()
// testMultiply(5, 9);

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers, and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

function sumAndMultiply(a, b, c) {
  let sumResult = sum(sum(a, b)[0], c)[0];
  let productResult = multiply(multiply(a, b)[0], c)[0];
  let sumMessage = `${a} and ${b} and ${c} sum to ${sumResult}.`;
  let productMessage = `The product of ${a} and ${b} and ${c} is ${productResult}.`;
  return [sumResult, productResult, sumMessage, productMessage];
}

// Uncomment this line to test sumAndMultiply()
// testSumAndMultiply(4, 7, 5);

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

function sumArray(sumArr) {
  let sumResult = 0;
  for (let number of sumArr) {
    sumResult = sum(sumResult, number)[0];
  }
  let numbersString = sumArr.join(',');
  let message = `${numbersString} was passed in as an array of numbers, and ${sumResult} is their sum.`;
  return [sumResult, message];
}

// Uncomment this line to test sumArray()
// testSumArray([2, 3, 4]);

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

function multiplyArray(multArr) {
  let productResult = 1;
  for (let number of multArr) {
    productResult = multiply(productResult, number)[0];
  }
  let numbersString = multArr.join(',');
  let message = `The numbers ${numbersString} have a product of ${productResult}.`;
  return [productResult, message];
}

// Uncomment this line to test multiplyArray()
// testMultiplyArray([2, 3, 4]);

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the
