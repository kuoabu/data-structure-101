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

  isOperator(c: string | number): boolean {
    if (typeof c === 'string') {
      return '+-*/'.includes(c);
    }
    return false;
  }

  operatorProced(c: string | number): number {
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
    let output = '';
    let stack = new Stack();
    let space = ' ';

    let infixNotation = this.infix;

    infixNotation.split(space).forEach((c) => {
      if (c === '(') {
        // 左括號，直接塞入堆疊
        stack.push(c);
      } else if (this.isNumeric(c)) {
        // 數字，直接塞入輸出
        output += c + space;
      } else if (this.isOperator(c)) {
        // 符號
        while (stack.count() > 0) {
          const top = stack.getTop();
          if (
            top &&
            this.isOperator(top) &&
            this.operatorProced(c) <= this.operatorProced(top)
          ) {
            // 優先順序不高於堆疊頂符號，將堆疊頂移出並輸出
            output += stack.pop() + space;
          } else {
            break;
          }
        }
        // 將目前符號塞入堆疊
        stack.push(c);
      } else if (c === ')') {
        // 右括號
        let foundLeft = false;
        for (let i = 0; i < stack.count(); i++) {
          const top = stack.getTop();
          if (top === '(') {
            // 找到左括號
            stack.pop();
            foundLeft = true;
            break;
          } else {
            // 將堆疊頂移出並輸出
            output += stack.pop() + space;
          }
        }
        if (!foundLeft) {
          throw new Error('Error: parentheses mismatched');
        }
      } else {
        throw new Error(`Error: unknown token ${c}`);
      }
    });

    while (stack.count() > 0) {
      const top = stack.getTop();
      if (top === '(' || top === ')') {
        throw new Error('Error: parentheses mismatched');
      }
      output += stack.pop() + space;
    }

    return output.trim();
  }

  calc(): number {
    return 0;
  }
}
