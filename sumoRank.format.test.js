require('./index.js');

test('sumoRank.format("Y1E", "Nn # Dd") to be "Yokozuna 1 East"', () => {
  expect(sumoRank.format("Y1E", "Nn # Dd")).toBe("Yokozuna 1 East");
});

test('SR.301 text (error) - sumoRank.format("", "Nn # Dd")', () => {
  expect(sumoRank.format("", "Nn # Dd")).toEqual(expect.stringMatching(/^SR.301/));
});

test('SR.401 text (error) - sumoRank.format("Y1E", "")', () => {
  expect(sumoRank.format("Y1E", "")).toEqual(expect.stringMatching(/^SR.401/));
});