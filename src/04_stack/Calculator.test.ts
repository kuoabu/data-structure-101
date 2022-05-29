import { Calculator } from './Calculator';

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
      let cases = '0123456789';
      cases.split('').forEach((c) => {
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
});
