import { cleanup, renderHook } from 'react-hooks-testing-library';
import useInterval from '../src/use-interval';
import { useState } from 'react';

afterEach(cleanup);

test('should return previous value', () => {
  const { result, rerender } = renderHook((p) => {
    const [seconds, setSeconds] = useState(0);
    const [resetKey, setKey] = useState(0);
    useInterval(() => {
      setSeconds(seconds + 1);
    }, 1000, [resetKey]);
    return { seconds, setKey };
  });
  expect(result.current.seconds).toBe(0);
  
  expect(result.current).toBe(1);
  expect(result.current).toBe('string');
});