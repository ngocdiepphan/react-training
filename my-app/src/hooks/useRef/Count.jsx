import { useRef, useState, useEffect } from "react";

export default function Count() {
  const [count, setCount] = useState(60);

  const timerId = useRef(null);
  const prevCount = useRef();
  const h2Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    const rect = h2Ref.current.getBoundingClientRect();
    console.log(rect);
  });

  const handleStart = () => {
    if (timerId.current === null) {
      timerId.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      console.log('Start ->', timerId.current);
    }
  };

  const handleStop = () => {
    if (timerId.current !== null) {
      clearInterval(timerId.current); //tranh chay lien tuc
      timerId.current = null;
      console.log('Stop ->', timerId.current);
    }
  };

  useEffect(() => {
    if (count <= 0) {
      handleStop(); // dung dem khi dat gia tri toi 0
    }
  }, [count]);

  useEffect(() => {
    return () => {
      if (timerId.current !== null) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  console.log(count, prevCount.current);

  return (
    <>
      <h2 ref={h2Ref}>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}


