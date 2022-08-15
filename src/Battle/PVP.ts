import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Character, player2: Character) {
    super(player1);
    console.log(player2);
  }
}
