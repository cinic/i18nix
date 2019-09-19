import { mergeDeep } from './merge';

describe('Object merge testing', () => {
  test('merge nested object', () => {
    expect(mergeDeep({ a: { b: { c: 1 } } }, { a: { b: { c: 5 } } })).toStrictEqual({ a: { b: { c: 5 } } });
  });

  test('merge mixed object', () => {
    expect(mergeDeep({ a: 5, c: { b: { c: 1 } }, d: [1] }, { a: 1, c: { b: { c: 5 } }, d: [2] })).toStrictEqual({ a: 1, c: { b: { c: 5 } }, d: [2] });
  });
})
