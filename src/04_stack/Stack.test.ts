import Stack from './Stack';

describe('Stack', () => {
  describe('isEmpty()', () => {
    it('should be true when first init', () => {
      const subject = new Stack();
      expect(subject.isEmpty()).toBe(true);
    });
    it('should be false when item is pushed', () => {
      const subject = new Stack();
      subject.push(0);
      expect(subject.count()).toBe(1);
    });
  });

  describe('count()', () => {
    it('should be 0 when first init', () => {
      const subject = new Stack();
      expect(subject.count()).toBe(0);
    });
    it('should increaseby 1 when push item', () => {
      const subject = new Stack();
      subject.push(0);
      expect(subject.count()).toBe(1);
    });
    it('should decrease by 1 when pop item', () => {
      const subject = new Stack();
      subject.push(0);
      subject.pop();
      expect(subject.count()).toBe(0);
    });
    it('should return proper count after multiple push/pop actions', () => {
      const subject = new Stack();
      subject.push(0);
      subject.push(1);
      subject.push(2);
      subject.pop();
      subject.push(3);
      expect(subject.count()).toBe(3);
    });
  });

  describe('getTop()', () => {
    it('should be undefined when fisrt init', () => {
      const subject = new Stack();
      expect(subject.getTop()).toBe(undefined);
    });
    it('should return last in item from stack', () => {
      const subject = new Stack();
      const item = 999;
      subject.push(0);
      subject.push(item);
      expect(subject.getTop()).toBe(item);
    });
  });

  describe('getTop()', () => {
    it('should be undefined when fisrt init', () => {
      const subject = new Stack();
      expect(subject.getTop()).toBe(undefined);
    });
    it('should return last in item from stack', () => {
      const subject = new Stack();
      const item = 999;
      subject.push(0);
      subject.push(item);
      expect(subject.getTop()).toBe(item);
      expect(subject.count()).toBe(2);
    });
  });

  describe('push()', () => {
    it('should push item to top of stack', () => {
      const subject = new Stack();
      subject.push(0);
      expect(subject.getTop()).toBe(0);
      subject.push(1);
      expect(subject.getTop()).toBe(1);
    });
  });

  describe('pop()', () => {
    it('should pop out undefined when stack is empty', () => {
      const subject = new Stack();
      expect(subject.pop()).toBe(undefined);
    });
  });

  describe('push() and pop()', () => {
    it('should follow FILO principle', () => {
      const subject = new Stack();
      subject.push(0);
      subject.push(1);
      subject.push(2);
      subject.push(3);
      expect(subject.pop()).toBe(3);
      expect(subject.pop()).toBe(2);
      expect(subject.pop()).toBe(1);
      expect(subject.pop()).toBe(0);
    });
  });
});
