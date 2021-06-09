import { ContractModel, ContractPrime } from '../models/contract-model'

describe('Class ContractModel', () => {

  const contractData = {
    id: String(new Date().getTime()),
    date_init: new Date(2021),
    expiration_date: new Date(2022),
    month: 12,
    monthlyCost: 500
  }

  it('Contract regular 12 month', () => {
    const contract = new ContractModel(contractData);

    expect(contract.getId()).toBe(contractData.id);
    expect(contract.getDateInit()).toEqual(contractData.date_init);
    expect(contract.getExpirationDate()).toStrictEqual(contractData.expiration_date);
    expect(contract.getMonth()).toBe(contractData.month);
    expect(contract.getMonthlyCost()).toBe(contractData.monthlyCost);
  })

  it('monthlyDiscount contract Prime 24 months', () => {

    /**
     * Aplicamos el Patron Open Close Principle
     * 
     * Creamos un a nueva clase llamada ContractPrime
     * que extiende de ContractModel porque no podemos 
     * modificarla y en ContractPrime creamos el nuevo
     * metodo que aplicara el descuento al monthlyCost
     */

    const contract = {
      ...contractData,
      expiration_date: new Date(2023),
      month: 24
    }

    const contractPrime = new ContractPrime(contract)

    expect(contractPrime.monthlyDiscount()).toBe(50)
  })
})
