export default abstract class Race {
  abstract get maxLifePoints(): number;

  constructor(
    private readonly _name: string,
    private readonly _dexterity: number,
  ) { }

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
