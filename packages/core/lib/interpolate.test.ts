import { interpolate } from './interpolate';

describe('Interpolation', () => {
  test('interpolate count', () => {
    expect(interpolate('Less than %{count}', { count: 5 })).toBe('Less than 5');
  });
})