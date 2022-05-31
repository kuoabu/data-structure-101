import Calculator, {
  isNumeric,
  isOperator,
  operatorProced,
  getOperationNumbers,
} from './Calculator';
import Stack from './Stack';

describe('Calculator', () => {
  describe('isNumeric()', () => {
    it('should be false when input is not numeric', () => {
      expect(isNumeric('')).toBe(false);
      expect(isNumeric('+')).toBe(false);
      expect(isNumeric('-')).toBe(false);
      expect(isNumeric('*')).toBe(false);
      expect(isNumeric('/')).toBe(false);
      expect(isNumeric('a')).toBe(false);
      expect(isNumeric('ab1')).toBe(false);
    });
    it('should be true when input is numeric', () => {
      const cases = '0 1 2 3 4 5 6 7 8 9 10 11 999';
      cases.split(' ').forEach((c) => {
        expect(isNumeric(c)).toBe(true);
      });
    });
  });

  describe('isOperator()', () => {
    it('should be true when input is valid operator: +-*/', () => {
      expect(isOperator('+')).toBe(true);
      expect(isOperator('-')).toBe(true);
      expect(isOperator('*')).toBe(true);
      expect(isOperator('/')).toBe(true);
    });

    it('should be false when input is not an operator', () => {
      expect(isOperator('1')).toBe(false);
      expect(isOperator('(')).toBe(false);
      expect(isOperator(')')).toBe(false);
    });
  });

  describe('operatorProced()', () => {
    it('should "*/" has greater procedure than "+-"', () => {
      expect(operatorProced('*') - operatorProced('+')).toBeGreaterThan(0);
      expect(operatorProced('*') - operatorProced('-')).toBeGreaterThan(0);
      expect(operatorProced('/') - operatorProced('+')).toBeGreaterThan(0);
      expect(operatorProced('/') - operatorProced('-')).toBeGreaterThan(0);
    });
  });

  describe('toPrefix()', () => {
    it('should generate prefix notaion correctly', () => {
      const infix = '9 + ( 3 - 1 ) * 3 + 10 / 2';
      const subject = new Calculator(infix);
      const expected = '9 3 1 - 3 * + 10 2 / +';
      expect(subject.toPostfix()).toBe(expected);
    });
  });

  describe('getOperationNumbers()', () => {
    it('should return top 2 numbers in stack', () => {
      const stack = new Stack();
      stack.push(9);
      stack.push(6);
      const expected = [9, 6];
      expect(getOperationNumbers(stack)).toEqual(expected);
    });
  });

  describe('calc()', () => {
    it('should output calculate answer correctly', () => {
      const infix = '9 + ( 3 - 1 ) * 3 + 10 / 2';
      const subject = new Calculator(infix);
      const expected = 20;
      expect(subject.calc()).toBe(expected);
    });
  });
});
