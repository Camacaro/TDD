import { RegisterVehicle } from '../registerVehicle/register-vehicle';
import { MissingFormalParameter } from '../../errors/client-error';

// SUT = System Under Test

describe('RegisterVeicle', () => {

  test('is the name does not exist return 400', () => {
    const sut = new RegisterVehicle();

    const httpRequest = {
      body: {
        model: 'DXT',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter('name'))
  })

  test('is the model does not exist return 400', () => {
    const sut = new RegisterVehicle();

    const httpRequest = {
      body: {
        name: 'Nissan',
        year: 2020
      }
    }

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter('model'))
  })

  test('is the year does not exist return 400', () => {
    const sut = new RegisterVehicle();

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'DXT',
      }
    }

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingFormalParameter('year'))
  })
})