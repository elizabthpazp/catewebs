import { cn } from './utils';

test('cn function merges class names', () => {
  const result = cn('foo', 'bar');
  expect(result).toBe('foo bar');
});
