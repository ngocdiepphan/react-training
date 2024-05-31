import { useState } from "react";

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    // setScore(score+1); +1
    setScore(s => s + 1);
  }

  return(
    <>
    <button onClick={() => increment()}>+1</button>
    <button onClick={() => {
      increment();
      increment();
      increment();
      increment();
      increment();
    }}>+5</button>
    <h1>Score: {score}</h1>
    </>
  )
}
