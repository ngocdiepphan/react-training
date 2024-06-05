import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("Diep Phan");
  const [age, setAge] = useState(22);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>
        Hello {name}. You are {age}
      </p>
    </>
  );
}
