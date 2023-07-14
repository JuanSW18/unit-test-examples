import { Main } from "./01-basic";

describe('@Test Main', () => {
  let component: Main;

  beforeEach(() => {
    component = new Main();
  })

  describe('# fizzbuzz', () => {

    it('should return fizz if number es mod 3', () => {
      const result = component.fizzbuzz(9);
      expect(result).toEqual('fizz');
    })

    it('should return buzz if number es mod 5', () => {
      const result = component.fizzbuzz(25);
      expect(result).toEqual('buzz');
    })

    it('should return fizz buzz if number es mod 3 and 5', () => {
      const result = component.fizzbuzz(30);
      expect(result).toEqual('fizz buzz');
    })

    it('should return num for other cases', () => {
      const result = component.fizzbuzz(7);
      expect(result).toEqual('7');
    })

  })

})