import React, { useState, useEffect } from "react";
import Content from "./Content";
import Cleanup from "./Cleanup";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h1>Current Time</h1>
      <p>useEffect</p>
      <p>{time.toLocaleTimeString()}</p>

      <section>
        <h2>Learn useEffect</h2>
        <ol>
          <li>
            <h3 className="item">useEffect(callback, [])</h3>
            <Content />
          </li>
          <li>
            <h3 className="item">useEffect(callback, [deps])</h3>
            <Cleanup />
          </li>
        </ol>
      </section>
    </div>
  );
}

export { Clock };
