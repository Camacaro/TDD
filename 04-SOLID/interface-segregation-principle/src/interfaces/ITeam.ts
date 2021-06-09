
export interface ITeam {
  position(name: string, tShirt: number, skills: string[]): void;
}

export interface ISoccerPlay {
  attacker: (name: string) => string
}