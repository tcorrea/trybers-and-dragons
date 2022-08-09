import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._archetypeInstances += 1;
    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._archetypeInstances;
  }
}
