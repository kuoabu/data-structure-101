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

  getItem(index: Types.Index): Types.Item | undefined {
    const item = this.space[index];
    return item;
  }

  insertItem(index: Types.Index, item: Types.Item): void {
    this.space.splice(index, 0, item);
  }

  removeItem(index: Types.Index): Types.Item | undefined {
    const item = this.space[index];
    this.space = this.space.filter((_, i) => i !== index);
    return item;
  }

  locateItem(item: Types.Item): Types.Index {
    return this.space.findIndex((el) => el === item);
  }
}
