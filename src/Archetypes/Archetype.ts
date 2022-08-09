import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special: number;
  private _cost: number;
  abstract get energyType(): EnergyType;

  constructor(
    private _name: string,
  ) {
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public static createdArchetypeInstances(): number {
    throw Error('Not implemented');
  }
}
