import { cleanup, renderHook, act } from 'react-hooks-testing-library';
import { useInterval } from '../src';
import { useState } from 'react';

afterEach(cleanup);

test('should return call interval properly', () => {
  jest.useFakeTimers();
  const { result } = renderHook(() => {
    const [seconds, setSeconds] = useState(0);
    const [resetKey, setKey] = useState(0);
    useInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000, [resetKey]);
    return { seconds, setKey };
  });
  expect(result.current.seconds).toBe(0);
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(result.current.seconds).toBe(1);
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(result.current.seconds).toBe(6);


  act(() => {
    jest.advanceTimersByTime(500);
  });
  expect(result.current.seconds).toBe(6);
  act(() => {
    // reset interval
    result.current.setKey(2);
  });
  // act will batch update, wait reset useInterval
  act(() => {
    jest.advanceTimersByTime(500);
  });
  expect(result.current.seconds).toBe(6);
  act(() => {
    jest.advanceTimersByTime(500);
  });
  expect(result.current.seconds).toBe(7);
});