import { useRef, useEffect } from "react";

export default function usePrevious<T = any>(value?: T) {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
