import { FoodHelper } from '../helpers/food-model-helper';
import { FoodModel } from '../models/food-model';

describe('Classes', () => {

  it('Class FoodModel', () => {
    const food = new FoodModel({
      name: 'Pasta',
      description:  'con pollo y platano',
      price: 5300,
      inventory: 50
    })

    expect(food.getFood).toEqual(food);
    expect(food.getName).toEqual('Pasta')
    expect(food.getDescription).toEqual('con pollo y platano')
    expect(food.getPrice).toBe(5300)
    expect(food.getInventory).toBe(50)
  });

  it('Food Helper', () => {
    const foodhelper = new FoodHelper('', '', 0, 0);
    expect(foodhelper).toEqual(foodhelper);
  });
})