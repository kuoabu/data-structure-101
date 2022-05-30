import * as Types from './Calculator.type';
import * as StackTypes from './Stack.type';
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

  getOperationNumbers(stack: StackTypes.Stack): number[] {
    let num1 = Number(stack.pop());
    let num2 = Number(stack.pop());
    return [num2, num1];
  }

  calc(): number {
    let stack = new Stack();
    let space = ' ';

    const prefixNotation = this.toPostfix();

    prefixNotation.split(space).forEach((c) => {
      if (this.isNumeric(c)) {
        stack.push(c);
      } else if (this.isOperator(c)) {
        // 取前兩個算數子
        const [num2, num1] = this.getOperationNumbers(stack);
        if (num2 === undefined || num1 === undefined) {
          throw new Error('Error: operation fail');
        }

        switch (c) {
          case '+':
            stack.push(num2 + num1);
            break;
          case '-':
            stack.push(num2 - num1);
            break;
          case '*':
            stack.push(num2 * num1);
            break;
          case '/':
            if (num1 === 0) {
              throw new Error('Error: devided by 0');
            } else {
              stack.push(num2 / num1);
            }
            break;
        }
      } else {
        throw new Error(`Error: unknown token ${c}`);
      }
    });

    // 輸出答案
    let output = Number(stack.pop());
    return output;
  }
}
