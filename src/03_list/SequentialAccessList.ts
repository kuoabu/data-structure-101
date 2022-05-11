import * as Types from './List.type';

export default class SequentialAccessList implements Types.List {
  space: Types.Item[];

  constructor() {
    this.space = [];
  }

  isEmpty(): boolean {
    return this.space.length === 0;
  }

  count(): number {
    return this.space.length;
  }

  clear(): void {
    this.space = [];
  }

  getItem(index: number): Types.Item {
    const item = this.space[index];
    if (item === undefined) {
      throw new Error('Item not found.');
    }
    return item;
  }

  insertItem(index: number, item: number): void {
    this.space.splice(index, 0, item);
  }

  removeItem(index: number): Types.Item {
    const item = this.space[index];
    if (item === undefined) {
      throw new Error('Item not found.');
    }
    this.space = this.space.filter((_, i) => i !== index);
    return item;
  }

  locateItem(item: number): number {
    return this.space.findIndex((el) => el === item);
  }
}
