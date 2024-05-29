import React from "react";
import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h2 className="item">1. Nesting components</h2>
      <button className="btn">I'm a button</button>
      <ul>Responding to event</ul>
      <li>Counters that update together</li>
      <button onClick={handleClick}>Clicked {count} times</button>
      <br />
      <button onClick={handleClick}>Clicked {count} times</button>
    </>
  );
};

export { MyButton };
