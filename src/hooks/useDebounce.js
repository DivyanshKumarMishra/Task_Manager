import React, { useCallback, useRef } from 'react';

function useDebounce(cb, delay = 300) {
  const timer = useRef(null);

  const debouncedFunc = useCallback(
    (...args) => {
      if (timer.current) {
        clearInterval(timer.current);
      }

      timer.current = setTimeout(() => {
        cb(...args);
      }, delay);
    },
    [cb, delay]
  );

  return debouncedFunc;
}

export default useDebounce;
