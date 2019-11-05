require('./index.js');

test('sumoRank.format("Y1E", "Nn # Dd") to be "Yokozuna 1 East"', () => {
  expect(sumoRank.format("Y1E", "Nn # Dd")).toBe("Yokozuna 1 East");
});

test('SR.301 text (error) - sumoRank.format("", "Nn # Dd")', () => {
  expect(sumoRank.format("", "Nn # Dd")).toBe('SR.301 Rank Error - Empty Rank string');
});

test('SR.401 text (error) - sumoRank.format("Y1E", "")', () => {
  expect(sumoRank.format("Y1E", "")).toBe('SR.401 Format Error - Empty Format string');
});