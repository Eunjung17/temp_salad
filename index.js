// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);


// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");
// const stringArray = ["1","2","3"];
// Convert the array of strings into an array of numbers.
let numbers = [];

for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);

  numbers.push(number);
}


// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}


/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sumNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNum += numbers[i];
  }
  return sumNum
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  let sumNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNum += numbers[i];
  }

  return (sumNum / numbers.length)
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {

  if (numbers.length === 0) {
    return null;
  }

  let numMin = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if(numMin > numbers[i]){
      numMin = numbers[i]
    }

  }
  return numMin;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  if (numbers.length === 0) {
      return null; // Return null if the array is empty
    }

  let numMax = numbers[0]; // Assume the first element is the largest

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numMax) {
      numMax = numbers[i];
    }
  }

  return numMax;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {

  if (numbers.length === 0) {
      return null;
  }

  let largest = numbers[0];
  let smallest = numbers[0];

  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }

      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }

  return largest - smallest;
}
   
  // TODO

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {

  if (numbers.length === 0) {
      return null;
  }
  
  let numEven = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      numEven.push(numbers[i]);
    }
  }

  return numEven
}
  

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {

  if (numbers.length === 0) {
      return null;
  }

  let numOdd = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      numOdd.push(numbers[i]);
    }
  }

  return numOdd
}

function numberSort(numbers){
  numbers.sort((a,b)=>a - b);

  return numbers;
}

// Peform some calculations on the numbers.
console.log(`The number(s) that you put : ${numberSort(numbers)}`);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
