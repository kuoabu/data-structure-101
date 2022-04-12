import * as Types from './List.type';

export default class SequentialAccessList implements Types.List {
  space: Types.Item[];

  constructor() {
    this.space = [];
  }

  isEmpty(): Boolean {
    return !!this.space.length;
  }
}
