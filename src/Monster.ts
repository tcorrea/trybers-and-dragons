import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._strength = 63;
    this._lifePoints = 85;
  }

  public receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      this.lifePoints -= attackPoints;
      if (this.lifePoints < 0) this.lifePoints = -1;
    }
    return this.lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  private set lifePoints(newLifePoints: number) {
    this._lifePoints = newLifePoints;
  }

  public get strength(): number {
    return this._strength;
  }
}
