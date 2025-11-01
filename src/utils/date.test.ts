import { describe, expect, it } from 'vitest';
import { formatDate, formatLongDate, parseDate } from './date';

describe('date utils', () => {
  it('parses ISO date without timezone drift', () => {
    const parsed = parseDate('2025-03-15');
    expect(parsed.getUTCFullYear()).toBe(2025);
    expect(parsed.getUTCMonth()).toBe(2); // zero-based
    expect(parsed.getUTCDate()).toBe(15);
  });

  it('formats short date consistently', () => {
    const formatted = formatDate('2025-03-15', { month: 'short', day: 'numeric', year: 'numeric' }, 'en-US');
    expect(formatted).toBe('Mar 15, 2025');
  });

  it('formats long date consistently', () => {
    const formatted = formatLongDate('2025-03-15', 'en-US');
    expect(formatted).toBe('March 15, 2025');
  });
});
