const arrayOfIntegers = [11, 15, 20, 24, 45, 60, 78, 83, 40];

// find numbers divisible by 10

const divisibleNumbersByTen = arrayOfIntegers.filter((num) => num % 10 === 0);

console.log(divisibleNumbersByTen);

//return an arrays of numbers , where odd numbers are incremented by 1 and even numbers are decremented by 1

const newArrays = arrayOfIntegers.map((number) => {
  if (number % 2 === 1) {
    return;
    number + 1;
  } else {
    return;
    number - 1;
  }
});

console.log(newArrays);

//return an object with sum of all odd numbers and even numbers separately

const sumOfOddAndEven = arrayOfIntegers.reduce(
  (prev, curr) => {
    if (curr % 2 !== 0) {
      return;
      prev.sumOfOddNumbers + curr;
    } else {
      return;
      prev.sumOfEvenNumbers + curr;
    }
  },
  { sumOfOddNumbers: 0, sumOfEvenNumbers: 0 }
);

console.log(sumOfOddAndEven);
