import { VehicleHelper } from '../helpers/vehicle-model-helper';
import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {

  it('Class VehicleModel', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan', 
      model: 'DXT', 
      year: 2020,
      price: 25000,
      inventory: true
    })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DXT')
    expect(vehicleModel.getYear()).toBe(2020)
    expect(vehicleModel.getPrice()).toBe(25000)
    expect(vehicleModel.getInventory()).toBeTruthy()
  });

  it('Vehicle Helper', () => {
    const vehiclHelper = new VehicleHelper('', '', 0, 0, false);
    expect(vehiclHelper).toEqual(vehiclHelper);
  });
})