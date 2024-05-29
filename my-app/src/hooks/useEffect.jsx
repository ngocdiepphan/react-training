import React, { useState, useEffect } from 'react';

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
    </div>
  );
}

export { Clock };
