import Race from './Race';

export default class Elf extends Race {
  private static _racesInstances = 0;
  private readonly _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._racesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._racesInstances;
  }
}
