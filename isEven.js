function isEven(number) {
  console.log(number, "divided by 2 er vaagshesh ", number % 2);
  if (number % 2 === 0) {
    return true;
  }
}

const result = isEven(47);
console.log("is Even", result);
