import usePromiseRaw from 'react-use-promise-alternative';
export default function usePromise<Result = any>(promise: Promise<Result> | (() => (Promise<Result> | void)), deps?: any[]): ["pending" | "resolved" | "rejected", Result | undefined, Error] {
  const [result, error, state] = usePromiseRaw(promise as any, deps);
  return [state, result || undefined, error];
}
