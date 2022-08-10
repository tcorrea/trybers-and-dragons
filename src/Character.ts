import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import SimpleFighter from './Fighter/SimpleFighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public attack(enemy: SimpleFighter): void {
    // Toda vez que acontecer um ataque, o inimigo recebido por parâmetro recebe um dano;
    // Este dano deve ser equivalente a força (strength) de quem ataca.
    // enemy.receiveDamage(this.strength);
    this.receiveDamage(enemy.strength);
  }

  // public special(enemy: Fighter): void { }

  public levelUp(): void {
    this.maxLifePoints += getRandomInt(1, 10);
    this.strength += getRandomInt(1, 10);
    this.dexterity += getRandomInt(1, 10);
    this.defense += getRandomInt(1, 10);
    this.energy = { type_: this.energy.type_, amount: 10 };

    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }
    this.lifePoints = this._race.maxLifePoints;
  }

  public receiveDamage(attackPoints: number): number {
    // Este valor deve ser decrescido de sua defesa (defense), assim causando um dano (damage);
    this.defense -= attackPoints;

    // Se o dano for maior que 0, você perde pontos de vida (lifePoints);
    // if (attackPoints > 0) this._lifePoints -= attackPoints;
    if (attackPoints > 0) {
      this.lifePoints -= attackPoints;
    }
    // Ao receber o ataque e perder pontos de vida (lifePoints), 
    // e se sua vida chegar a 0 ou menos, você deve fixá-la com o valor -1;
    // Provavelmente vai dentro do if acima
    if (this.lifePoints <= 0) this._lifePoints = -1;

    return this.lifePoints;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  private set lifePoints(life: number) {
    this._lifePoints = life;
  }

  public get strength(): number {
    return this._strength;
  }

  private set strength(v: number) {
    this._strength = v;
  }

  public get defense(): number {
    return this._defense;
  }

  private set defense(v: number) {
    this._defense = v;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  private set dexterity(v: number) {
    this._dexterity = v;
  }

  public get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  private set energy(newEnergy: Energy) {
    this._energy = newEnergy;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private set maxLifePoints(v: number) {
    this._maxLifePoints = v;
  }
}
