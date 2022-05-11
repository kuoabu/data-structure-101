export type Item = number;
export type Index = number;
export interface List {
  isEmpty(): boolean;
  count(): number;
  clear(): void;
  getItem(index: Index): Item;
  insertItem(index: Index, item: Item): void;
  removeItem(index: Index): Item;
  locateItem(item: Item): Index;
}
export interface Node {
  value: Item;
  next: Node | null;
}
