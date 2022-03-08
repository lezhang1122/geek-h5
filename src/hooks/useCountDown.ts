import { useEffect, useRef, useState } from 'react';

export default function useCountDown(initCount = 10, callBack = () => {}) {
  const timeId = useRef<number>(-1);
  const [count, setCount] = useState(initCount);

  const start = () => {
    setCount(initCount);
    timeId.current = window.setInterval(() => {
      setCount(count => count - 1);
    }, 1000);
  };
  useEffect(
    () => () => {
      clearInterval(timeId.current);
    },
    []
  );

  useEffect(() => {
    if (count === 0) {
      clearInterval(timeId.current);
      callBack();
    }
  }, [count]);

  return { count, start };
}
