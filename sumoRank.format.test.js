require('./index.js');

describe('sumoRank.format() working', () => {
    
  test('sumoRank.format("Y1E", "Nn # Dd") to be "Yokozuna 1 East"', () => {
    expect(sumoRank.format("Y1E", "Nn # Dd")).toBe("Yokozuna 1 East");
  });

});

describe('Format SR.100, SR.200 ERROR:', () => {

  test('SR.101 text (error) - sumoRank.format("Maegashira 18 East", "N#D")', () => {
    expect(sumoRank.format("Maegashira 18 East", "N#D")).toEqual(expect.stringMatching(/^SR.101/));
  });
  test('SR.101 text (error) - sumoRank.format("Juryo 15 East", "N#D")', () => {
    expect(sumoRank.format("Juryo 15 East", "N#D")).toEqual(expect.stringMatching(/^SR.101/));
  });
  test('SR.101 text (error) - sumoRank.format("Makushita 61 East", "N#D")', () => {
    expect(sumoRank.format("Makushita 61 East", "N#D")).toEqual(expect.stringMatching(/^SR.101/));
  });
  test('SR.101 text (error) - sumoRank.format("Sandanme 101 East", "N#D")', () => {
    expect(sumoRank.format("Sandanme 101 East", "N#D")).toEqual(expect.stringMatching(/^SR.101/));
  });

});

describe('Format SR.300 ERROR', () => {

  test('SR.301 text (error) - sumoRank.format("", "Nn # Dd")', () => {
    expect(sumoRank.format("", "Nn # Dd")).toEqual(expect.stringMatching(/^SR.301/));
  });
  test('SR.302 text (error) - sumoRank.format(" ", "Nn # Dd")', () => {
    expect(sumoRank.format(" ", "Nn # Dd")).toEqual(expect.stringMatching(/^SR.302/));
  });
  test('SR.304 text (error) - sumoRank.format("M two east", "Nn # Dd")', () => {
    expect(sumoRank.format("M ? east", "Nn # Dd")).toEqual(expect.stringMatching(/^SR.304/));
  });
  test('SR.305 text (error) - sumoRank.format("Y Y", "Nn # Dd")', () => {
    expect(sumoRank.format("Y Y", "Nn # Dd")).toEqual(expect.stringMatching(/^SR.305/));
  });
  test('SR.306 text (error) - sumoRank.format("2 West", "Nn")', () => {
    expect(sumoRank.format("2 West", "Nn")).toEqual(expect.stringMatching(/^SR.306/));
  });
  test('SR.307 text (error) - sumoRank.format("Ozeki West", "#")', () => {
    expect(sumoRank.format("Ozeki West", "#")).toEqual(expect.stringMatching(/^SR.307/));
  });
  test('SR.308 text (error) - sumoRank.format("Ozeki 2", "Dd")', () => {
    expect(sumoRank.format("Ozeki 2", "Dd")).toEqual(expect.stringMatching(/^SR.308/));
  });

});

describe('Format SR.400 ERROR', () => {

  test('SR.401 text (error) - sumoRank.format("Y1E", "")', () => {
    expect(sumoRank.format("Y1E", "")).toEqual(expect.stringMatching(/^SR.401/));
  });
  test('SR.402 text (error) - sumoRank.format("Y1E", " ")', () => {
    expect(sumoRank.format("Y1E", " ")).toEqual(expect.stringMatching(/^SR.402/));
  });
  test('SR.403 text (error) - sumoRank.format("Y1E", 123)', () => {
    expect(sumoRank.format("Y1E", 123)).toEqual(expect.stringMatching(/^SR.403/));
  });
  test('SR.406 text (error) - sumoRank.format("Y1E", "Nn Nn")', () => {
    expect(sumoRank.format("Y1E", "Nn Nn")).toEqual(expect.stringMatching(/^SR.406/));
  });
  test('SR.407 text (error) - sumoRank.format("Y1E", "# #")', () => {
    expect(sumoRank.format("Y1E", "# #")).toEqual(expect.stringMatching(/^SR.407/));
  });
  test('SR.408 text (error) - sumoRank.format("Y1E", "Dd Dd")', () => {
    expect(sumoRank.format("Y1E", "Dd Dd")).toEqual(expect.stringMatching(/^SR.408/));
  });

});

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