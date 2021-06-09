import { ISoccerPlay, ITeam } from '../interfaces/ITeam';

/**
 * Con el Patron de Interface segregation principle 
 * lo que hacemos es agregar interfaces para que las
 * clases se comporten como esperamos
 */
export class Team implements ITeam, ISoccerPlay {

  position (name: string, tShirt: number, skills: string[]): (string | number | string[])[] {
    
    return [name, tShirt, skills]
  }

  attacker (name: string): string {
    name = 'attacker';
    return name
  }
}