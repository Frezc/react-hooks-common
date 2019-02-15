import React, { useState } from 'react';
import useDebounce from './useDebounce';

const UseDebounceDemo: React.FunctionComponent = () => {
  // const debouncedFn = useDebounce((v) => {
  //   console.log('input debounced', v);
  // }, 1000);
  const [v, setV] = useState('');
  console.log('v', v)

  return (
    <input
      type="text"
      value={v}
      onChange={(e) => {
        console.log(e.target.value)
        setV(e.target.value)
      }}
    />
  )
}

function UseDebounceDemo1() {
  const [v, setV] = useState('');
  console.log('v', v)

  return (
    <input
      type="text"
      value={v}
      onChange={(e) => {
        console.log(e.target.value)
        setV(e.target.value)
      }}
    />
  )
}

export default UseDebounceDemo1;
