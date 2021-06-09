
export class InvalidArg extends Error {

  constructor (
    public arg: string
  ) {
    super(`Invalid Argument: ${ arg }`)
  }
}