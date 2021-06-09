export class FoodHelper {
  
  constructor (
    public readonly description: string,
    public readonly name: string,
    public readonly price: number,
    public readonly inventory: number
  ) {}
}