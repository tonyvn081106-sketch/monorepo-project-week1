import { describe, it, expect } from 'vitest';
import { capitalize, sumAll, uniq } from '../src/utils';

describe('utils', () => {
  it('capitalize: trims and uppercases first char', () => {
    expect(capitalize(' hello')).toBe('Hello');
  });

  it('capitalize: empty/space → empty string', () => {
    expect(capitalize('   ')).toBe('');
  });

  it('sumAll: sums numbers and ignores falsy', () => {
    expect(sumAll([1, 2, 0, 3])).toBe(6);
  });

  it('sumAll: handles empty array', () => {
    expect(sumAll([])).toBe(0);
  });

  it('uniq: removes duplicates (primitives)', () => {
    expect(uniq([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  it('uniq: works with strings', () => {
    expect(uniq(['a', 'a', 'b'])).toEqual(['a', 'b']);
  });
  it('should throw error for invalid inputs', () => {
    expect(() => (capitalize as any)(123)).toThrow(TypeError);
    expect(() => (sumAll as any)('not-array')).toThrow(TypeError);
    expect(() => (uniq as any)(null)).toThrow(TypeError);
  });
});