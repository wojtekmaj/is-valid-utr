import { describe, expect, it } from 'vitest';

import isValidUTR from './index.js';

describe('isValidUTR', () => {
  it('returns false for no input', () => {
    // @ts-expect-error-next-line
    const result = isValidUTR();

    expect(result).toBe(false);
  });

  it('returns false for non-numeric input', () => {
    const result = isValidUTR('elephants');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidUTR('112345678fox');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidUTR('112345678FOX');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid length', () => {
    const result = isValidUTR('123');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with valid length', () => {
    const result = isValidUTR('4852611332');

    expect(result).toBe(false);
  });

  it('returns true for valid numeric input', () => {
    const result = isValidUTR(1123456789);

    expect(result).toBe(true);
  });

  it('returns true for valid input', () => {
    const result = isValidUTR('1123456789');

    expect(result).toBe(true);
  });

  it('returns true for valid input with spaces', () => {
    const result = isValidUTR('11234 56789');

    expect(result).toBe(true);
  });

  it('returns true for valid input with dashes', () => {
    const result = isValidUTR('11234-56789');

    expect(result).toBe(true);
  });
});
