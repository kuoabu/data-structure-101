export interface Calculator {
  infix: string;
  toPostfix(): string;
  calc(): number;
}
