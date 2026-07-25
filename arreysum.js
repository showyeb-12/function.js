const numbers = [12, 4, 6, 18, 56];

let sum = 0;
for (const num of numbers) {
  sum = sum + num;
  // console.log(num, sum);
}
console.log(sum);

const Odds = [23, 15, 71, 29, 97];

let sumOdds = 0;
for (const num of Odds) {
  sumOdds = sumOdds + num;
}

const evens = [24, 96, 12, 6, 44];

let sumEvens = 0;
for (const num of evens) {
  sumEvens = sumEvens + num;
}

function sumOFArray() {
  console.log("inside the function", Array);
  let sum = 0;
  for (const num of Array) {
    // console.log(num);
    sum = sum + num;
  }
  return sum;
}

const result = sumOFArray(numbers);
console.log("sum of array", result);
const resultOdd = sumOFArray(Odds);
console.log("sum of Odd numbers", resultOdd);
const resultEven = sumOFArray(evens);
console.log("sum of even numbers", resultEven);
