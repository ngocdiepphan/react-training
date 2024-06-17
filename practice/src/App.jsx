import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-xl font-bold underline w-200 h-100 bg-amber-200 md:bg-red-400 md:text-3xl lg:bg-lime-300 lg:text-4xl">
        Hello world!
      </h1>
      <p className="font-sans text-xl md:text-amber-300 lg:text-lime-600 lg:text-4xl">Hello, this is font Inter</p>
      <p className="font-serif text-xl md:text-3xl md:text-end lg:text-start lg:text-5xl lg:text-purple-500">This is font PlayfairDisplay-Regular</p>
    </>
  );
}

export default App;
