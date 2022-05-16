import * as Types from './List.type';

class Node implements Types.Node {
  value: number;
  next: Types.Node | null;
  constructor(item: number) {
    this.value = item;
    this.next = null;
  }
}

export default class SingleLinkedList implements Types.List {
  private _length: number;
  private _head: Types.Node | null;

  constructor() {
    this._length = 0;
    this._head = null;
  }

  isEmpty(): boolean {
    return this._length === 0;
  }

  count(): number {
    return this._length;
  }

  clear(): void {
    this._head = null;
  }

  private _findNode(index: number): Types.Node | null {
    let head = this._head;
    let count = 0;
    while (head) {
      if (index === count) {
        return head;
      }
      count++;
      head = head.next;
    }
    return null;
  }

  getItem(index: number): number {
    let found = this._findNode(index);
    if (found) {
      return found.value;
    } else {
      throw new Error('Item not found.');
    }
  }

  insertItem(index: number, item: number): void {
    let newNode = new Node(item);

    if (index === 0) {
      newNode.next = this._head;
      this._head = newNode;
    }

    let prev = this._findNode(index - 1);
    if (prev) {
      newNode.next = prev.next;
      prev.next = newNode;
    } else {
      throw new Error('Item not found.');
    }
  }

  removeItem(index: number): number {
    if (index === 0 && this._head) {
      let item = this._head.value;
      this._head = this._head.next;
      return item;
    }

    let prev = this._findNode(index - 1);
    if (prev && prev.next) {
      let item = prev.next.value;
      prev.next = prev.next.next;
      return item;
    } else {
      throw new Error('Item not found.');
    }
  }

  locateItem(item: number): number {
    let head = this._head;
    let count = 0;
    while (head) {
      if ((item = head.value)) {
        return count;
      }
      count++;
      head = head.next;
    }
    throw new Error('Item not found.');
  }
}