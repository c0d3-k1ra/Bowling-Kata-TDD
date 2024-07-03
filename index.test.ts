import BowlingGame from './index';

test('Gutter game should score 0', () => {
  const game = new BowlingGame();

  for (let i = 0; i < 20; i++) {
    game.roll(0);
  }

  expect(game.getScore()).toBe(0);
});
