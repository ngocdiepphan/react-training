import { useState } from "react";

export default function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 2000);
  }

  return (
    <>
      <section>
        <h3>Example State as a Snapshot</h3>
        <form onSubmit={handleSubmit}>
          <label>
            To:{" "}
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
              <option value="Diep Phan">Diep Phan</option>
            </select>
          </label>
          <br />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </section>

      <section>
        <h3>Example setting state triggers render</h3>
        <TriggerForm />
      </section>

      <section>
        <h3>Example state as a Snapshot</h3>
        <TrafficLight />
      </section>
    </>
  );
}

function TriggerForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");
  if (isSent) {
    return <p style={{ color:'blue'}}>Your message is on its way!</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        setMessage(message);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br/>
      <button type="submit">Send 📩</button>
    </form>
  );
}

function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert (walk ? 'Stop is next': 'Walk is next')
  }
  return (
    <>
    <button onClick={handleClick}>
      Change to {walk ? 'Stop': 'Walk'}
    </button>
    <h3 style={{color: walk ? 'green' : 'red'}}
    >{walk ? 'Walk': 'Stop'}</h3>
    </>
  )
}
