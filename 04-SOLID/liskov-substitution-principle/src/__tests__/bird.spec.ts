import { Bird, Eagle, Penguin } from '../entities/bird-intity';

describe('Bird', () => {
  test('Should Fly', () => {
    const bird = new Bird({
      name: 'Bird',
      age: 30,
      origen: 'North America'
    })

    expect(bird.fly()).toEqual('Bird')
  })

  test('Should Fly', () => {
    const eagle = new Eagle({
      name: 'Aguila',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.fly()).toEqual('Aguila')
  })

  test('Shouldnot fly Penguin', () => {
    const penguin = new Penguin({
      name: 'Pinguino',
      age: 30,
      origen: 'Polo North'
    })

    expect(penguin.fly()).toEqual(new Error('I cant fly'))
  })

  test('Shouldnot walk and swim Penguin', () => {
    const penguin = new Penguin({
      name: 'Pinguino',
      age: 30,
      origen: 'Polo North'
    })

    expect(penguin.walk()).toBe('I can walk')
    expect(penguin.swim()).toBe('I can swim')
  })
  
})
