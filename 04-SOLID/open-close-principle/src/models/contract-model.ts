import { IContractor } from '../interfaces/IContract';

export class ContractModel {
  constructor (
    public contract: IContractor
  ) {
    // Object.assign(this, contract)
  }

  getId (): string {
    return this.contract.id;
  }

  getDateInit (): Date {
    return this.contract.date_init
  }
  
  getExpirationDate (): Date {
    return this.contract.expiration_date 
  }
  
  getMonth (): number{
    return this.contract.month  
  }
  
  getMonthlyCost (): number {
    return this.contract.monthlyCost 
  }
  
}

/**
 * Aplicamos el Patron Open Close Principle
 * 
 * Creamos un a nueva clase llamada ContractPrime
 * que extiende de ContractModel porque no podemos 
 * modificarla y en ContractPrime creamos el nuevo
 * metodo que aplicara el descuento al monthlyCost
 */
export class ContractPrime extends ContractModel {

  monthlyDiscount (): number {
    const discount = 0.10;
    return this.contract.monthlyCost * discount;
  }
}