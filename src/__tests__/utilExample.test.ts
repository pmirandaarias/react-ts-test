import utilExample from '../utilExample';

describe('utilExample', () => {
  it('should be false on number out of array', () => {
    expect(utilExample(5)).toBeFalsy();
  });
  it('should be true on number in of array', () => {
    expect(utilExample(2)).toBeTruthy();
  });
});
