import useDimensions from 'react-use-dimensions';

declare function useDimensions<T extends Element = Element>(): [
  (T) => void,
  DOMRect | {},
  T
];
export default useDimensions;
