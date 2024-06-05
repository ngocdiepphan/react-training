import { useState } from 'react';

export default function Like() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number} ❤️</h1>
      <button className='btn__queue' onClick={() => {
        // setNumber(n => n + 1);
        // setNumber(n => n + 1);
        // setNumber(n => n + 1);//3

        setNumber(number + 5);
        setNumber(n => n + 1);//6

        // setNumber(number + 5);
        // setNumber(n => n + 1);
        // setNumber(42);//42
      }}>+3 ❤️</button>

      <section>
        <h3>Example challenges</h3>
        <RequestTracker />
      </section>
    </>
  )
}

function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    setPending(p => p - 1);
    setCompleted(c => c + 1)
  }

  return (
    <>
      <p>
        Pending: {pending}
      </p>
      <p>
        Completed: {completed}
      </p>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

