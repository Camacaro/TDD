import { Team } from '../models/team-model';

describe('Team class', () => {
  it('Position Goalkeeper', async () => {
    const team = new Team();

    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: ['hick hard', 'run fast', 'jump high'],
    }

    expect(
      team.position(position.name, position.tShirt, position.skills)
    ).toEqual([
      position.name, 
      position.tShirt, 
      position.skills
    ])
  })

  it('Position Center MidField', async () => {
    const team = new Team();

    const position = {
      name: 'Center MidField',
      tShirt: 2,
      skills: ['hick hard', 'run fast'],
    }

    expect(
      team.position(position.name, position.tShirt, position.skills)
    ).toEqual([
      position.name, 
      position.tShirt, 
      position.skills
    ])
  })

  it('soccker Play', async () => {
    const soccerPlay = new Team();

    expect(soccerPlay.attacker('')).toBe('attacker')
  })
})
