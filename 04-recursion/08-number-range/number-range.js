function numberRange(startNum, endNum) {
  if (endNum === startNum) {
    return [startNum];
  }

  const numbers = numberRange(startNum, endNum - 1);
  numbers.push(endNum);
  console.log(numbers);
  return numbers;
}

module.exports = numberRange;
