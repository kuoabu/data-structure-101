export interface Calculator {
  infix: string;
  isNumeric(c: string): boolean;
  isOperator(c: string): boolean;
  operatorProced(c: string): number;
  toPostfix(): string;
  calc(): number;
}
