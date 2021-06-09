
export class VehicleHelper {
  
  constructor (
    public readonly name: string,
    public readonly model: string,
    public readonly year: number,
    public readonly price: number,
    public readonly inventory: boolean
  ) {}
}