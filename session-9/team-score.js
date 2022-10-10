export const getPointsForScore = (score, homeTeam = true) => {
  const [homeScore, awayScore] = score.split(':');
  let points = 0; // loss

  if (
    parseInt(homeTeam ? homeScore : awayScore, 10) >
    parseInt(!homeTeam ? homeScore : awayScore, 10)
  ) {
    points = 3;
  }

  if (parseInt(homeScore, 10) === parseInt(awayScore, 10)) {
    points = 1;
  }

  return points;
};

export const getPointsForSeason = (scores = [], homeTeam = true) =>
  scores.reduce(
    (tally, currentScore) => tally + getPointsForScore(currentScore, homeTeam),
    0,
  );
