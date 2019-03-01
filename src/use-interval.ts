import { useEffect, useRef } from 'react';
export default function useInterval(fn: Function, delay: number, deps?: any[], ...params: any[]) {
  const fnRef = useRef<Function>(fn);
  fnRef.current = fn;
  useEffect(() => {
    const intervalId = setInterval((...params) => {
      fnRef.current(...params);
    }, delay, ...params);
    return () => {
      clearInterval(intervalId);
    }
  }, deps);
}
