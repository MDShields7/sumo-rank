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