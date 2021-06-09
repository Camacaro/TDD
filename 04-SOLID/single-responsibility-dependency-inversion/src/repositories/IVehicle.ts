import { Vehicle } from '../entities/IVehicle';

export interface IVehicleRepostory {
  findById (id: number): Promise<Vehicle>
  save (vehicle: Vehicle): Promise<void>
}