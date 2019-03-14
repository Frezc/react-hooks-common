import { cleanup, renderHook } from 'react-hooks-testing-library';
import { usePrevious } from '../src';

afterEach(cleanup);

test('should return previous value', () => {
  const { result, rerender } = renderHook<{ value: any }, any>((p) => usePrevious(p.value), { initialProps: { value: 1 } });
  expect(result.current).toBe(undefined);
  rerender({ value: 'string' });
  expect(result.current).toBe(1);
  rerender({ value: undefined });
  expect(result.current).toBe('string');
});