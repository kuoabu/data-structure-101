export interface Calculator {
  infix: string;
  isNumeric(c: string): boolean;
  isOperator(c: string | number): boolean;
  operatorProced(c: string | number): number;
  toPostfix(): string;
  calc(): number;
}
