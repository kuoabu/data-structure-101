import * as Types from './List.type';
import Node from './Node';

export default class SingleLinkedList implements Types.List {
  private head: Types.Node | null;

  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  count(): number {
    return this.length;
  }

  clear(): void {
    this.head = null;
    this.length = 0;
  }

  private findNode(index: Types.Index): Types.Node | undefined {
    let { head } = this;
    let count = 0;
    while (head) {
      if (index === count) {
        return head;
      }
      count += 1;
      head = head.next;
    }
    return undefined;
  }

  getItem(index: Types.Index): Types.Item | undefined {
    const found = this.findNode(index);
    if (found) {
      return found.value;
    }
    return undefined;
  }

  insertItem(index: Types.Index, item: Types.Item): void {
    const newNode = new Node(item);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return;
    }

    const prev = this.findNode(index - 1);
    if (prev) {
      newNode.next = prev.next;
      prev.next = newNode;
      this.length += 1;
    }
  }

  removeItem(index: Types.Index): Types.Item | undefined {
    if (index === 0 && this.head) {
      const item = this.head.value;
      this.head = this.head.next;
      this.length -= 1;
      return item;
    }

    const prev = this.findNode(index - 1);
    if (prev && prev.next) {
      const item = prev.next.value;
      prev.next = prev.next.next;
      this.length -= 1;
      return item;
    }
    return undefined;
  }

  locateItem(item: Types.Item): Types.Index {
    let { head } = this;
    let count = 0;
    while (head) {
      if (item === head.value) {
        return count;
      }
      count += 1;
      head = head.next;
    }
    throw new Error('Item not found.');
  }
}
