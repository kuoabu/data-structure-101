import * as Types from './Stack.type';
import { Item, List } from '../03_list/List.type';
import SingleLinkedList from '../03_list/SingleLinkedList';

export default class Stack implements Types.Stack {
  private space: List;

  constructor() {
    this.space = new SingleLinkedList();
  }

  isEmpty(): boolean {
    return this.space.isEmpty();
  }

  count(): number {
    return this.space.count();
  }

  clear(): void {
    return this.space.clear();
  }

  getTop(): Item | undefined {
    return this.space.getItem(0);
  }

  push(item: Item): void {
    this.space.insertItem(0, item);
  }

  pop(): Item | undefined {
    return this.space.removeItem(0);
  }
}
