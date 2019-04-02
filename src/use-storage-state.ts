import { SetStateAction, useEffect, useState } from 'react';

function loadFromStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  if (value === null) {
    return value as null;
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    console.error(`[useStorageState] unexpected json ${value}`, e);
    return null;
  }
}

function isFunction<T>(v: T | ((...args: any[]) => any)): v is (...args: any[]) => any {
  return typeof v === 'function';
}

export default function useStorageState<S>(key: string): [S | null, (updater: SetStateAction<S | null>) => void];
export default function useStorageState<S>(key: string, initialState: S | (() => S)): [S, (updater: SetStateAction<S>) => void];
export default function useStorageState<S>(key: string, initialState?: S | (() => S)): [S | null, (updater: SetStateAction<S | null>) => void] {
  function getInitialState() {
    const localValue = loadFromStorage<S>(key);
    if (localValue === null && initialState) {
      return isFunction(initialState) ? initialState() : initialState;
    }
    return localValue;
  }

  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    setState(getInitialState());
  }, [key]);

  function updateState(updater: SetStateAction<S | null>) {
    setState((prev) => {
      const nextState = isFunction(updater) ? updater(prev) : updater;
      localStorage.setItem(key, JSON.stringify(nextState));
      return nextState;
    });
  }

  return [state, updateState];
}
