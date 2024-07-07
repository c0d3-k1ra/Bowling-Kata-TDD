import BowlingGame from './index';

const rollContinouslyFor = (game: BowlingGame, value: number, times: number) => {
  for (let i = 0; i < times; i++) {
    game.roll(value);
  }
};

const rollASpare = (game: BowlingGame) => {
  rollContinouslyFor(game, 5, 2);
}

describe("Bowling Kata", () => {
  test('Gutter game should score 0', () => {
    const game = new BowlingGame();
    rollContinouslyFor(game, 0, 20);
  
    expect(game.getScore()).toBe(0);
  });
  
  test('All rolls are 1s', () => {
    const game = new BowlingGame();
    rollContinouslyFor(game, 1, 20);

    expect(game.getScore()).toBe(20);
  });

  test('1 spare', () => {
    const game = new BowlingGame();
    rollASpare(game);
    rollContinouslyFor(game, 1,18);
    
    expect(game.getScore()).toBe(29);
  });
});


