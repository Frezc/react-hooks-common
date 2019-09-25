import { useDebounce } from 'use-lodash-debounce-throttle';
import { useState } from 'react';
import useDidUpdate from './use-did-update';

type ParametersExceptFirst<T extends (...args: any) => any> = T extends (f: any, ...args: infer P) => any ? P : never;
type P = ParametersExceptFirst<typeof useDebounce>;

export default function useDebounceValue<T>(rawValue: T, ...params: P) {
  const [debouncedValue, setDebouncedValue] = useState(rawValue);
  const updateValue = useDebounce((v) => {
    setDebouncedValue(v);
  }, ...params);

  useDidUpdate(() => {
    updateValue(rawValue);
  }, [rawValue]);
  return debouncedValue;
}
