import React, { useState, useEffect } from 'react';

function RenderCommit() {
  return (
    <section>
      <h2>Inspiring Sculptures</h2>
      <Image />
      <Image />
      <Image />
      <ClockDay />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

function ClockDay() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <h1 style={{color: 'green'}}>Current hour: {time}</h1>
      <input />
    </>
  );
}

export default RenderCommit;
