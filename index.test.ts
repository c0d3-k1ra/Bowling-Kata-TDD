import BowlingGame from './index';



describe("Bowling Kata", () => {
  let game = new BowlingGame();

  const rollContinouslyFor = (value: number, times: number) => {
    for (let i = 0; i < times; i++) {
      game.roll(value);
    }
  };

  beforeEach = () => {
    game = new BowlingGame();
  };
  
  test('Gutter game should score 0', () => {
    rollContinouslyFor(0, 20);
  
    expect(game.getScore()).toBe(0);
  });
  
  test('All rolls are 1s', () => {
    rollContinouslyFor(1, 20);

    expect(game.getScore()).toBe(20);
  });
});


