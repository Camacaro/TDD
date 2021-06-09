import { IVehicleRepostory } from '../repositories/IVehicle';
import { CreateVehicleDTO } from './CreateVehicleDTO';
import { Vehicle } from '../entities/IVehicle';

export class CreateVehicle {
  
  /**
   * Aqui aplicamos la dependencia de inversion 
   * ya que vehicleRepository tiene un contrato 
   * con una interfaz que maneja la base de datos
   * y no dependemos de una unica db ya sea mariadb
   * postgresql etc, separamos esa funcionalidad 
   * a una clase y solo inyectamos la nueva clase 
   * que siga con el mismo contrato
   */
  constructor (
    private vehicleRepository: IVehicleRepostory
  ) { }

  /**
   * Aqui aplicamos el Single responsability ya
   * que esta clase solo se encarga de crear un
   * vehiculo
   */
  async execute (data: CreateVehicleDTO) {
    const vehicleExists = await this.vehicleRepository.findById(data.id)

    if( vehicleExists ) {
      throw new Error('Vehicle exists in data base')
    }

    const vehicle = new Vehicle(data)

    await this.vehicleRepository.save(vehicle)
  }
}