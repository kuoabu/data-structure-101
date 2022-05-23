import * as Types from './List.type';
import SequentialAccessList from './SequentialAccessList';
import SingleLinkedList from './SingleLinkedList';

const Lists = [
  { name: 'SequentialAccessList', constructor: SequentialAccessList },
  { name: 'SingleLinkedList', constructor: SingleLinkedList },
];

Lists.forEach((list) => {
  describe(`${list.name}`, () => {
    const List = list.constructor;

    describe('init', () => {
      it('should be fine', () => {
        expect(new List()).toBeDefined();
      });
    });

    describe('isEmpty()', () => {
      it('should be fine', () => {
        expect(new List().isEmpty()).toBeTruthy();
      });
    });

    describe('clear()', () => {
      it('should works fine', () => {
        let subject = new List();
        expect(subject.count()).toBe(0);

        subject.insertItem(0, 0);
        subject.clear();

        expect(subject.count()).toBe(0);
      });
    });

    describe('getItem()', () => {
      it('should works fine', () => {
        let subject = new List();
        expect(() => subject.getItem(0)).toThrow(new Error('Item not found.'));

        subject.insertItem(0, 0);
        subject.insertItem(1, 1);

        expect(subject.getItem(0)).toBe(0);
        expect(subject.getItem(1)).toBe(1);
      });
    });

    describe('count()', () => {
      it('should be fine', () => {
        expect(new List().count()).toBe(0);
      });
    });

    describe('removeItem()', () => {
      it('should works fine', () => {
        let subject = new List();
        expect(() => subject.removeItem(0)).toThrow(
          new Error('Item not found.')
        );

        subject.insertItem(0, 0);
        subject.insertItem(1, 1);

        expect(subject.removeItem(0)).toBe(0);
        expect(subject.getItem(0)).toBe(1);
        expect(subject.count()).toBe(1);
      });
    });

    describe('insertItem()', () => {
      let subject: Types.List;

      beforeEach(() => {
        subject = new List();
      });

      it('should works fine', () => {
        expect(subject.count()).toBe(0);

        subject.insertItem(0, 0);
        subject.insertItem(1, 1);
        subject.insertItem(2, 2);

        expect(subject.count()).toBe(3);
        expect(subject.locateItem(0)).toBe(0);
        expect(subject.locateItem(1)).toBe(1);
        expect(subject.locateItem(2)).toBe(2);
      });

      it('can insert item to specific location', () => {
        expect(subject.count()).toBe(0);

        subject.insertItem(0, 0);
        subject.insertItem(0, 1);
        subject.insertItem(0, 2);

        expect(subject.count()).toBe(3);
        expect(subject.locateItem(0)).toBe(2);
        expect(subject.locateItem(1)).toBe(1);
        expect(subject.locateItem(2)).toBe(0);
      });
    });
  });
});
