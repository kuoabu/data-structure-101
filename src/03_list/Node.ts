import * as Types from './List.type';

export default class Node implements Types.Node {
  value: Types.Item;

  next: Types.Node | null;

  constructor(item: Types.Item) {
    this.value = item;
    this.next = null;
  }
}
