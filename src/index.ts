import usePromiseRaw from 'react-use-promise';
export function usePromise<Result = any>(promise: Promise<Result> | (() => Promise<Result>), deps?: any[] | undefined): ["pending" | "resolved" | "rejected", Result | undefined, Error] {
  const [result, error, state] = usePromiseRaw(promise, deps);
  return [state, result || undefined, error];
}
