'use strict';

// Define the testArray variable
let testArray = [2, 3, 4];

// Problem 1: sum()
function sum(a, b) {
  let sumResult = a + b;
  let message = `The sum of ${a} and ${b} is ${sumResult}.`;
  return [sumResult, message];
}

// Uncomment this line to test sum()
// testSum(4, 7);

// Problem 2: multiply()
function multiply(a, b) {
  let product = a * b;
  let message = `The product of ${a} and ${b} is ${product}.`;
  return [product, message];
}

// Uncomment this line to test multiply()
// testMultiply(5, 9);

// Problem 3: sumAndMultiply()
function sumAndMultiply(a, b, c) {
  let sumResult = sum(sum(a, b)[0], c)[0];
  let product = multiply(multiply(a, b)[0], c)[0];
  let sumMessage = `${a} and ${b} and ${c} sum to ${sumResult}.`;
  let productMessage = `The product of ${a} and ${b} and ${c} is ${product}.`;
  return [sumResult, product, sumMessage, productMessage];
}

// Uncomment this line to test sumAndMultiply()
// testSumAndMultiply(4, 7, 5);

// Problem 4: sumArray()
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
// testSumArray(testArray);

// Problem 5: multiplyArray()
function multiplyArray(multArr) {
  let product = 1;
  for (let number of multArr) {
    product = multiply(product, number)[0];
  }
  let numbersString = multArr.join(',');
  let message = `The numbers ${numbersString} have a product of ${product}.`;
  return [product, message];
}

// Uncomment this line to test multiplyArray()
// testMultiplyArray(testArray);

// Problem 6: multiplyAnyArray() (Stretch Goal)
let testDynamicArray = [1, 2, 3, 4, 5];

function multiplyAnyArray(dynamicArray) {
  let product = 1;
  for (let number of dynamicArray) {
    product = multiply(product, number)[0];
  }
  let numbersString = dynamicArray.join(',');
  let message = `The numbers ${numbersString} have a product of ${product}.`;
  return [product, message];
}

// Uncomment this line to test multiplyAnyArray()
// testMultiplyAnyArray(testDynamicArray);
'use strict';

// Define the testArray variable
let testArray = [2, 3, 4];

// Problem 1: sum()
function sum(a, b) {
  let sumResult = a + b;
  let message = `The sum of ${a} and ${b} is ${sumResult}.`;
  return [sumResult, message];
}

// Uncomment this line to test sum()
// testSum(4, 7);

// Problem 2: multiply()
function multiply(a, b) {
  let product = a * b;
  let message = `The product of ${a} and ${b} is ${product}.`;
  return [product, message];
}

// Uncomment this line to test multiply()
// testMultiply(5, 9);

// Problem 3: sumAndMultiply()
function sumAndMultiply(a, b, c) {
  let sumResult = sum(sum(a, b)[0], c)[0];
  let product = multiply(multiply(a, b)[0], c)[0];
  let sumMessage = `${a} and ${b} and ${c} sum to ${sumResult}.`;
  let productMessage = `The product of ${a} and ${b} and ${c} is ${product}.`;
  return [sumResult, product, sumMessage, productMessage];
}

// Uncomment this line to test sumAndMultiply()
// testSumAndMultiply(4, 7, 5);

// Problem 4: sumArray()
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
// testSumArray(testArray);

// Problem 5: multiplyArray()
function multiplyArray(multArr) {
  let product = 1;
  for (let number of multArr) {
    product = multiply(product, number)[0];
  }
  let numbersString = multArr.join(',');
  let message = `The numbers ${numbersString} have a product of ${product}.`;
  return [product, message];
}

// Uncomment this line to test multiplyArray()
// testMultiplyArray(testArray);

// Problem 6: multiplyAnyArray() (Stretch Goal)
let testDynamicArray = [1, 2, 3, 4, 5];

function multiplyAnyArray(dynamicArray) {
  let product = 1;
  for (let number of dynamicArray) {
    product = multiply(product, number)[0];
  }
  let numbersString = dynamicArray.join(',');
  let message = `The numbers ${numbersString} have a product of ${product}.`;
  return [product, message];
}

// Uncomment this line to test multiplyAnyArray()
// testMultiplyAnyArray(testDynamicArray);
