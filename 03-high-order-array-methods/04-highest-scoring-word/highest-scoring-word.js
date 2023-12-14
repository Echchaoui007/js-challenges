function highestScoringWord(str) {
  const worlds = str.split(" ");
  const scores = worlds.map((word) => {
    let score = 0;
    for (let letters of word) {
      score += letters.charCodeAt(0) - 96;
    }
    return score;
  });
  let highestScore = 0;
  let highestIndexe = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndexe = i;
    }
  }
  return worlds[highestIndexe];
}

module.exports = highestScoringWord;
