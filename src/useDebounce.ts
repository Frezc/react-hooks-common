import debounce from 'lodash/debounce';
import { useEffect, useRef } from 'react';

const emptyFn = debounce<any>(() => {}, 1000);

const useDebounce: typeof debounce = (fn, wait, options) => {
  const compareParams: any[] = [wait];
  if (options) {
    compareParams.push(options.leading);
    compareParams.push(options.maxWait);
    compareParams.push(options.trailing);
  }

  const debouncedFn = useRef(emptyFn);
  const fnRef = useRef(fn);

  fnRef.current = fn;
  useEffect(() => {
    debouncedFn.current = debounce(() => fnRef.current(), wait, options);
    return () => {
      debouncedFn.current.cancel();
    }
  }, compareParams);

  return debouncedFn.current;
}

export default useDebounce;
