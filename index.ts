class BowlingGame {
  private readonly rolls: number[] = [];
  private currentRoll: number = 0;

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }

  getScore(): number {
    let score = 0;
    for (let roll = 0; roll < this.currentRoll; roll++) {
      score += this.rolls[roll];
    }
    return score;
  }
}

export default BowlingGame;
