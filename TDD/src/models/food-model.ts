import { FoodHelper } from '../helpers/food-model-helper';

export class FoodModel {

  constructor (
    private readonly foodHelper: FoodHelper
  ) {}

  get getName (): string {
    return this.foodHelper.name;
  }

  get getDescription (): string {
    return this.foodHelper.description;
  }

  get getPrice (): number {
    return this.foodHelper.price;
  }

  get getInventory (): number {
    return this.foodHelper.inventory;
  }

  get getFood (): FoodHelper {
    return Object.assign(this, this.foodHelper)
  }
}