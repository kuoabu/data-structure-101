import SequentialAccessList from './SequentialAccessList';

describe('List', () => {
  const List = SequentialAccessList;

  describe('init', () => {
    it('should be fine', () => {
      expect(new List()).toBeDefined();
    });
  });

  describe('isEmpty', () => {
    it('should be fine', () => {
      expect(new List().isEmpty()).toBeTruthy();
    });
  });
});
