function sumOfEvenSquares(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const squaresNumbers = evenNumbers.map((num) => num ** 2);
  const sumOfNumbers = squaresNumbers.reduce((total, num) => total + num, 0);

  return sumOfNumbers;
}

module.exports = sumOfEvenSquares;
