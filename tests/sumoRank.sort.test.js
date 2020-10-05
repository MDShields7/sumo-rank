const sumoRank = require('./index.js');

require('./index.js');

describe('sumoRank.sort() working', () => {

  let arr = [ {rank:"J5W"}, {rank:"Y1W"}, {rank:"Y1E"}, {rank:"M6W"}, {rank:"J5E"} ];
  let arrResult = [ {rank:"Y1E"}, {rank:"Y1W"}, {rank:"M6W"}, {rank:"J5E"}, {rank:"J5W"} ];
  test('sumoRank.sort( arr ) to be an array containing the same elements in arr', () => {
    expect(sumoRank.sort( arr )).toEqual(
      expect.arrayContaining( arr ), );
  });
  test('sumoRank.sort( arr ) to be an array with the same length', () => {
    expect(sumoRank.sort( arr ).length).toEqual( arr.length );
  });

});

/* this should fail as the sort errors aren't being thrown yet */
describe('Format SR.500 ERROR', () => {

  test('SR.501 text (error) - sumoRank.sort([])', () => {
    expect(sumoRank.sort([])).toEqual(expect.stringMatching(/^SR.501/));
  });
  test('SR.501 text (error) - sumoRank.sort([{id: 1, rank: "Y1E"}])', () => {
    expect(sumoRank.sort([{id: 1, rank: "Y1E"}])).toEqual(expect.stringMatching(/^SR.501/));
  });
  test('SR.502 text (error) - sumoRank.sort([{id: 1}, {id: 2}])', () => {
    expect(sumoRank.sort([{id: 1}, {id: 2}])).toEqual(expect.stringMatching(/^SR.502/));
  });
  test('SR.502 text (error) - sumoRank.sort([{id: 1, runk: "Y1E"}, {id: 2, wronk: "Y1E"}])', () => {
    expect(sumoRank.sort([{id: 1, runk: "Y1E"}, {id: 2, wronk: "Y1E"}])).toEqual(expect.stringMatching(/^SR.502/));
  });
  test('SR.503 text (error) - sumoRank.sort([{rank: "Y"}, {rank: "Y"}])', () => {
    expect(sumoRank.sort([{rank: "Y"}, {rank: "Y"}])).toEqual(expect.stringMatching(/^SR.503/));
  });
  test('SR.503 text (error) - sumoRank.sort([{rank: "Jk"}, {rank: "Jk"}])', () => {
    expect(sumoRank.sort([{rank: "Jk"}, {rank: "Jk"}])).toEqual(expect.stringMatching(/^SR.503/));
  });
  test('SR.504 text (error) - sumoRank.sort([{rank: "Y1"}, {rank: "Y1"}])', () => {
    expect(sumoRank.sort([{rank: "Y1"}, {rank: "Y1"}])).toEqual(expect.stringMatching(/^SR.504/));
  });
  test('SR.504 text (error) - sumoRank.sort([{rank: "Jd50"}, {rank: "Jd50"}])', () => {
    expect(sumoRank.sort([{rank: "Jd50"}, {rank: "Jd50"}])).toEqual(expect.stringMatching(/^SR.504/));
  });
  test('SR.505 text (error) - sumoRank.sort([{rank: "Y1E"}, {rank: "Y1E"}])', () => {
    expect(sumoRank.sort([{rank: "Y1E"}, {rank: "Y1E"}])).toEqual(expect.stringMatching(/^SR.505/));
  });
  test('SR.505 text (error) - sumoRank.sort([{rank: "Jd50W"}, {rank: "Jd50W"}])', () => {
    expect(sumoRank.sort([{rank: "Jd50W"}, {rank: "Jd50W"}])).toEqual(expect.stringMatching(/^SR.505/));
  });

});