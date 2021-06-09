import { IBird } from '../interfaces/IBird';

export class Bird {
  constructor (
    public bird: IBird
  ) {
    // Object.assign(this, bird)
  }

  fly (): string {
    return this.bird.name;
  }
}

/**
 * Se aplica el principio de abierto/cerrado
 */
export class Eagle extends Bird {
  fly (): string {
    return this.bird.name;
  }
}

/**
 * No quedo muy claro este principio
 * ya que la clase bird debe separar el 
 * fly porque en pinguino al ser un pajaro
 * no puedo volar y lo estoy obligando a usar
 * el metodo fly y no deberia de ser asi
 */
export class Penguin extends Bird {
  fly (): any {
    return new Error('I cant fly')
  }

  walk (): string {
    return 'I can walk'
  }

  swim (): string {
    return 'I can swim'
  }
}