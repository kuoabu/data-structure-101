import * as Types from './List.type';

class Node implements Types.Node {
  value: number;
  next: Types.Node | null;
  constructor(item: Types.Item) {
    this.value = item;
    this.next = null;
  }
}

export default class SingleLinkedList implements Types.List {
  private _head: Types.Node | null;
  private _length: number;

  constructor() {
    this._head = null;
    this._length = 0;
  }

  isEmpty(): boolean {
    return this._length === 0;
  }

  count(): number {
    return this._length;
  }

  clear(): void {
    this._head = null;
    this._length = 0;
  }

  private _findNode(index: Types.Index): Types.Node | undefined {
    let head = this._head;
    let count = 0;
    while (head) {
      if (index === count) {
        return head;
      }
      count++;
      head = head.next;
    }
    return undefined;
  }

  getItem(index: Types.Index): Types.Item | undefined {
    let found = this._findNode(index);
    if (found) {
      return found.value;
    }
    return undefined;
  }

  insertItem(index: Types.Index, item: Types.Item): void {
    let newNode = new Node(item);

    if (index === 0) {
      newNode.next = this._head;
      this._head = newNode;
      this._length++;
      return;
    }

    let prev = this._findNode(index - 1);
    if (prev) {
      newNode.next = prev.next;
      prev.next = newNode;
      this._length++;
    }
  }

  removeItem(index: Types.Index): Types.Item | undefined {
    if (index === 0 && this._head) {
      let item = this._head.value;
      this._head = this._head.next;
      this._length--;
      return item;
    }

    let prev = this._findNode(index - 1);
    if (prev && prev.next) {
      let item = prev.next.value;
      prev.next = prev.next.next;
      this._length--;
      return item;
    }
    return undefined;
  }

  locateItem(item: Types.Item): Types.Index {
    let head = this._head;
    let count = 0;
    while (head) {
      if (item === head.value) {
        return count;
      }
      count++;
      head = head.next;
    }
    throw new Error('Item not found.');
  }
}
