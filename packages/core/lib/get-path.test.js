import { getPath } from './get-path';

describe('Object path testing', () => {
  test('get nested path', () => {
    expect(getPath(['a', 'b', 'c'], { a: { b: { c: 5 }} })).toBe(5);
  });
})