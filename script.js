const testString = "hello world!!!";
const testSentence = "hello world, this is a sentence";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseString(str) {
  const reversedChars = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedChars.push(str[i]);
  }
  return `Reversed String: ${reversedChars.join("")}`;
}

function countCharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return `chars count: ${count}`;
}

function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return `capitalized sentence: ${capitalizedWords.join(" ")}`;
}

function findMaximum(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return `Max value : ${max}`;
}

function findMinimum(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return `Min value : ${min}`;
}

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return `sum of array: ${sum}`;
}

function filterArray(array, condition) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return `filted array: ${filteredArray}`;
}
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return `factorial of ${n} is ${result}`;
}
function isPrime(num) {
  let result = true;
  if (num <= 1) result = false;
  if (num <= 3) result = true;
  if (num % 2 === 0 || num % 3 === 0) result = false;

  const sqrtNum = Math.sqrt(num);
  for (let i = 5; i <= sqrtNum; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) result = false;
  }

  return `is ${num} prime: ${result}`;
}
function fibonacciSequance(numTerms) {
  if (numTerms <= 0) return [];
  if (numTerms === 1) return [0];

  const fibSequence = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    const nextTerm = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextTerm);
  }

  return `fibonacci sequance of ${numTerms}: ${fibSequence}`;
}

console.log(reverseString(testString));
console.log(countCharacters(testString));
console.log(capitalizeWords(testSentence));
console.log(findMaximum(numbers));
console.log(findMinimum(numbers));
console.log(filterArray(numbers, (num) => num % 2 === 0));
console.log(sumArray(numbers));
console.log(factorial(5));
console.log(isPrime(2));
console.log(fibonacciSequance(10));
