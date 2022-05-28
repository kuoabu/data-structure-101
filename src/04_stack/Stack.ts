import * as Types from './Stack.type';
import { Item, List } from '../03_list/List.type';
import SingleLinkedList from '../03_list/SingleLinkedList';

export class Stack implements Types.Stack {
  private _space: List;

  constructor() {
    this._space = new SingleLinkedList();
  }

  isEmpty(): boolean {
    return this._space.isEmpty();
  }

  count(): number {
    return this._space.count();
  }

  clear(): void {
    return this._space.clear();
  }

  getTop(): Item | undefined {
    return this._space.getItem(0);
  }

  push(item: Item): void {
    this._space.insertItem(0, item);
  }

  pop(): Item | undefined {
    return this._space.removeItem(0);
  }
}
