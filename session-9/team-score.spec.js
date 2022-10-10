import { getPointsForScore, getPointsForSeason } from './team-score';

describe('Team Scores', () => {
  it('should return 1 when home team draws', () => {
    expect(getPointsForScore('1:1')).toBe(1);
  });
  it('should return 3 when home team wins', () => {
    expect(getPointsForScore('3:1')).toBe(3);
  });

  it('should return 0 when home team loses', () => {
    expect(getPointsForScore('1:3')).toBe(0);
  });

  describe('Season Tally', () => {
    it('should return home season total when given a list of scores', () => {
      const scores = ['1:0', '1:1', '2:1']; // 7

      expect(getPointsForSeason(scores)).toBe(7);
    });

    it('should return home team season total when given a list of scores', () => {
      const scores = ['1:0', '1:1', '2:1']; // 7
      const isHomeTeam = true;

      expect(getPointsForSeason(scores, isHomeTeam)).toBe(7);
    });

    it('should return away team season total when given a list of scores', () => {
      const scores = ['1:0', '1:1', '2:1']; // 1
      const isHomeTeam = false;

      expect(getPointsForSeason(scores, isHomeTeam)).toBe(1);
    });
  });
});
