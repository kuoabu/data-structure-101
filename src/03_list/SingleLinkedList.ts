import * as Types from './List.type';

export default class SingleLinkedList implements Types.List {
  _count: number;
  head: Types.Node | null;

  constructor() {
    this._count = 0;
    this.head = null;
  }

  isEmpty(): boolean {
    return this._count === 0;
  }

  count(): number {
    return this._count;
  }
}
