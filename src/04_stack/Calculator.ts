import * as Types from './Calculator.type';
import { Stack } from './Stack';

export class Calculator implements Types.Calculator {
  infix: string;

  constructor(infix: string) {
    this.infix = infix;
  }

  isNumeric(c: string): boolean {
    if (!c.length) {
      return false;
    }
    return !isNaN(+c);
  }

  isOperator(c: string): boolean {
    return '+-*/'.includes(c);
  }

  operatorProced(c: string): number {
    switch (c) {
      case '*':
      case '/':
        return 2;
      case '+':
      case '-':
        return 1;
      default:
        return 0;
    }
  }

  toPostfix(): string {
    let result = '';
    let stack = new Stack();

    let infixNotation = this.infix;

    infixNotation.split('').forEach((c) => {
      result += c;
    });

    return result;
  }

  calc(): number {
    return 0;
  }
}
