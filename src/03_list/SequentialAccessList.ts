import * as Types from './List.type';

export default class SequentialAccessList implements Types.List {
  space: Types.Item[];

  constructor() {
    this.space = [];
  }

  isEmpty(): boolean {
    return !!this.space.length;
  }

  // eslint-disable-next-line class-methods-use-this
  count(): number {
    return this.space.length;
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  insertItem(index: number, item: number): void {
    this.space.splice(index, 0, item);
    // throw new Error('Method not implemented.');
  }

  locateItem(item: number): number {
    return this.space.findIndex((el) => el === item);
  }
}
