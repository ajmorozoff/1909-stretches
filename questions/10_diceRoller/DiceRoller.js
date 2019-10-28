// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sides, total) {
    if (sides < 1 || total < 1 || typeof sides != 'number' || typeof total != 'number') {
      throw('invalid sides or total');
    }
    this.sides = sides;
    this.total = total;
    this.history = [];
  }
  roll() {
    let rolls = [];
    let count = this.total;
    while (count > 0) {
      let roll = Math.ceil(Math.random() * this.sides);
      rolls.push(roll);
      --count;
    }
    this.history.push(rolls);
    return rolls;
  }


}


module.exports = { DiceRoller };
