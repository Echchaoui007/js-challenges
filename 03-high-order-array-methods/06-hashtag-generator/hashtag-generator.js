function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }

  const words = str.trim().split(/\s+/);

  const capitalizeWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');

  const hashtag ='#' + capitalizeWords

  return hashtag.length > 140 ? false : hashtag;


}

module.exports = generateHashtag;
