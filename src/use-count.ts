import { useState } from 'react';

export default function useCount(initialCount: number | (() => number) = 0): [number, (offset?: number) => void] {
  const [count, setCount] = useState(initialCount);
  function increase(offset?: number) {
    if (typeof offset !== 'number') {
      offset = 1;
    }
    setCount((c) => c + offset!);
  }
  return [count, increase];
}
