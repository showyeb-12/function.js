// 1. how to declar function
function firstfunction() {}

// 2. how to call a function
firstfunction();

// 3. how to deal with parameter
function divide(num1, num2) {
  const result = num1 / num2;
  console.log("divide result", result);
}

divide(500, 8);

// 4. how to deal with return

function doMath(a, b, c, d) {
  const firstsum = a + b;
  const secondsum = c + d;
  const multiplied = firstsum * secondsum;
  const divided = multiplied / 4;
  return divided;
}

const result = doMath(4, 8, 16, 24);

// 5. call function with variable
const denominator = 2;
divide(result, denominator);
