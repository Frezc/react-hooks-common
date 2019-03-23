import { useRef, useEffect } from "react";

export default function useDidUpdate(fn: Function, deps?: any[]) {
  const mountRef = useRef(true);
  useEffect(() => {
    if (mountRef.current) {
      mountRef.current = false;
    } else {
      return fn();
    }
  }, deps);
}
