class Warrior {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  strike(enemy, swings) {
    enemy.health = Math.max(0, enemy.health - swings * 10);
  }
}

// https://www.codewars.com/kata/517b0f33cd023d848d000001
