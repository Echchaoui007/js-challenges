function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const stratIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[stratIndex + i]) {
      return alphabet[stratIndex + i];
    }
  }

  return "";
}

module.exports = findMissingLetter;
