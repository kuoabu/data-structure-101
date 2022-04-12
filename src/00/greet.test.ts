import greet from './greet';

describe('greet()', () => {
  it('should work fine', () => {
    expect(greet('world')).toBe('hello world');
  });
});
