import * as Types from './Calculator.type';
import * as StackTypes from './Stack.type';
import Stack from './Stack';

export function isNumeric(c: string): boolean {
  if (!c.length) {
    return false;
  }
  return !Number.isNaN(+c);
}

export function isOperator(c: string | number): boolean {
  if (typeof c === 'string') {
    return '+-*/'.includes(c);
  }
  return false;
}

export function operatorProced(c: string | number): number {
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

export function getOperationNumbers(stack: StackTypes.Stack): number[] {
  const num1 = Number(stack.pop());
  const num2 = Number(stack.pop());
  return [num2, num1];
}

export default class Calculator implements Types.Calculator {
  infix: string;

  constructor(infix: string) {
    this.infix = infix;
  }

  toPostfix(): string {
    let output = '';
    const stack = new Stack();
    const space = ' ';

    const infixNotation = this.infix;

    infixNotation.split(space).forEach((c) => {
      if (c === '(') {
        // 左括號，直接塞入堆疊
        stack.push(c);
      } else if (isNumeric(c)) {
        // 數字，直接塞入輸出
        output += c + space;
      } else if (isOperator(c)) {
        // 符號
        while (stack.count() > 0) {
          const top = stack.getTop();
          if (
            // eslint-disable-next-line operator-linebreak
            top &&
            // eslint-disable-next-line operator-linebreak
            isOperator(top) &&
            operatorProced(c) <= operatorProced(top)
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
        for (let i = 0; i < stack.count(); i += 1) {
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
    const stack = new Stack();
    const space = ' ';

    const prefixNotation = this.toPostfix();

    prefixNotation.split(space).forEach((c) => {
      if (isNumeric(c)) {
        stack.push(c);
      } else if (isOperator(c)) {
        // 取前兩個算數子
        const [num2, num1] = getOperationNumbers(stack);
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
          default:
            break;
        }
      } else {
        throw new Error(`Error: unknown token ${c}`);
      }
    });

    // 輸出答案
    const output = Number(stack.pop());
    return output;
  }
}
