import { Main } from "./01-basic";

describe('@Test Main', () => {
  let component: Main;

  beforeEach(() => {
    component = new Main();
  })

  describe('# fizzbuzz', () => {

    it('should return fizz if number es mod 3', () => {
      // arrange
      const numberToEvaluate = 9;
      // act
      const result = component.fizzbuzz(numberToEvaluate);
      // assert
      expect(result).toEqual('fizz');
    })

    it('should return buzz if number es mod 5', () => {
      const numberToEvaluate = 25;
      const result = component.fizzbuzz(numberToEvaluate);
      expect(result).toEqual('buzz');
    })

    it('should return fizz buzz if number es mod 3 and 5', () => {
      const numberToEvaluate = 30;
      const result = component.fizzbuzz(numberToEvaluate);
      expect(result).toEqual('fizz buzz');
    })

    it('should return num for other cases', () => {
      const numberToEvaluate = 7;
      const result = component.fizzbuzz(numberToEvaluate);
      expect(result).toEqual('7');
    })

  })

})