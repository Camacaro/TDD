import validator from 'validator';
import { EmailValidatorAdapter } from './email-validator-adapter';

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('Email Validator', () => {
  // sut: System under test
  it('Should return false validator', async () => {
    const sut = makeSut()
    
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    
    const isValid = sut.isValid('email@email.com');

    expect(isValid).toBeFalsy();
  })

  it('Should return true validator', async () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('email@email.com');

    expect(isValid).toBeTruthy();
  })

  it('Should return format correct email of the validator', async () => {
    const sut = new EmailValidatorAdapter()
    
    const isValidSpyOn = jest.spyOn(validator, 'isEmail');

    sut.isValid('email@email.com');

    expect(isValidSpyOn).toHaveBeenCalledWith('email@email.com')
  })
});