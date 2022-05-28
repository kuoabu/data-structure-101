import { Item } from '../03_list/List.type';

export interface Stack {
  isEmpty(): boolean;
  count(): number;
  clear(): void;
  getTop(): Item;
  push(item: Item): void;
  pop(): Item;
}
