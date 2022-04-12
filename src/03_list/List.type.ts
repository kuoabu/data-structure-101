export type Item = number;
export type Index = number;
export interface List {
  isEmpty(): boolean;
  count(): number;
  insertItem(index: Index, item: Item): void;
  locateItem(item: Item): Index;
}
