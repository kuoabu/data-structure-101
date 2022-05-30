import { Calculator } from './Calculator';
import { Stack } from './Stack';

describe('Calculator', () => {
  describe('isNumeric()', () => {
    const subject = new Calculator('');
    it('should be false when input is not numeric', () => {
      expect(subject.isNumeric('')).toBe(false);
      expect(subject.isNumeric('+')).toBe(false);
      expect(subject.isNumeric('-')).toBe(false);
      expect(subject.isNumeric('*')).toBe(false);
      expect(subject.isNumeric('/')).toBe(false);
      expect(subject.isNumeric('a')).toBe(false);
      expect(subject.isNumeric('ab1')).toBe(false);
    });
    it('should be true when input is numeric', () => {
      let cases = '0 1 2 3 4 5 6 7 8 9 10 11 999';
      cases.split(' ').forEach((c) => {
        expect(subject.isNumeric(c)).toBe(true);
      });
    });
  });

  describe('isOperator()', () => {
    const subject = new Calculator('');

    it('should be true when input is valid operator: +-*/', () => {
      expect(subject.isOperator('+')).toBe(true);
      expect(subject.isOperator('-')).toBe(true);
      expect(subject.isOperator('*')).toBe(true);
      expect(subject.isOperator('/')).toBe(true);
    });

    it('should be false when input is not an operator', () => {
      expect(subject.isOperator('1')).toBe(false);
      expect(subject.isOperator('(')).toBe(false);
      expect(subject.isOperator(')')).toBe(false);
    });
  });

  describe('operatorProced()', () => {
    const subject = new Calculator('');
    it('should "*/" has greater procedure than "+-"', () => {
      expect(
        subject.operatorProced('*') - subject.operatorProced('+')
      ).toBeGreaterThan(0);
      expect(
        subject.operatorProced('*') - subject.operatorProced('-')
      ).toBeGreaterThan(0);
      expect(
        subject.operatorProced('/') - subject.operatorProced('+')
      ).toBeGreaterThan(0);
      expect(
        subject.operatorProced('/') - subject.operatorProced('-')
      ).toBeGreaterThan(0);
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
      const subject = new Calculator('');
      const stack = new Stack();
      stack.push(9);
      stack.push(6);
      const expected = [9, 6];
      expect(subject.getOperationNumbers(stack)).toEqual(expected);
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
