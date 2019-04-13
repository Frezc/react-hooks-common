import { cleanup, renderHook, act } from 'react-hooks-testing-library';
import useCount from '../src/use-count';

afterEach(cleanup);

test('should works', () => {
  const { result } = renderHook(() => useCount());
  expect(result.current[0]).toBe(0);
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(1);
  act(() => {
    result.current[1](3);
  });
  expect(result.current[0]).toBe(4);
});