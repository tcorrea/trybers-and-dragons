export default abstract class Race {
  // private static _racesInstances = 0;
  abstract get maxLifePoints(): number;

  constructor(
    private readonly _name: string,
    private readonly _dexterity: number,
  ) {
    // Race._racesInstances += 1;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances(): number {
    throw Error('Not implemented');
    // return Race._racesInstances;
  }
}
