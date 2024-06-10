import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return(
    <>
    <h2 className="item">Focusing a text input</h2>
    <input ref={inputRef} />
    <button onClick={handleClick}>Focus the input</button>
    </>
  )
}
