import * as Types from './List.type';
import SequentialAccessList from './SequentialAccessList';

describe('List', () => {
  const List = SequentialAccessList;

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

  describe('count()', () => {
    it('should be fine', () => {
      expect(new List().count()).toBe(0);
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
