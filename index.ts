import { isSpreadElement } from "typescript";

class BowlingGame {
  private readonly rolls: number[] = [];
  private currentRoll: number = 0;

  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }

  getScore(): number {
    let score = 0;
    let rollIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if(this.isSpare(rollIndex)) {
        score += 10 + this.bonusForSpare(rollIndex);
      } else {
        score += this.rolls[rollIndex] + this.rolls[rollIndex+1]
      }
      rollIndex += 2;
    }
    return score;
  }

  private isSpare(rollIndex: number): boolean {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10;
  }

  private bonusForSpare(rollIndex: number): number {
    return this.rolls[rollIndex + 2];
  }
}

export default BowlingGame;
