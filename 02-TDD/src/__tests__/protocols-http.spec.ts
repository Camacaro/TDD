import { UrlLogin } from '../protocols/protocols-http';
import { InvalidArg } from '../errors/invalid-arg';

describe('Protocols Http and Querys', () => {
  
  test('Url User', () => {
    const parserUrl = UrlLogin.parseUrl('http://localhost:3000/login');

    expect(parserUrl.href).toBe('http://localhost:3000/login');
    expect(parserUrl.port).toBe('3000');
  })

  test('Response Query', () => {
    const parserUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password');

    const expectAuth = {
      user: 'user',
      password: 'password'
    }

    expect(parserUrl.query).toEqual(expectAuth);
  })

  test('Invalid Url ', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }

    expect(expectError).toThrowError(new InvalidArg(''))
  })
  
  
});