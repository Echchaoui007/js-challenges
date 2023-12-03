function findMissingNumber(arr) {
  if (arr.length === 0) return 1;
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actuelSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actuelSum += arr[i];
  }
  return expectedSum - actuelSum;
}

module.exports = findMissingNumber;
