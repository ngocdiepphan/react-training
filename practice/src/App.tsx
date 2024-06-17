import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-red-600 bg-green-200 md:text-secondary md:bg-blue-500 lg:text-green-500 lg:bg-bgSecondary">
          Hello Tailwind CSS!
        </h1>
        <p className="text-blue-500 text-xl">
          This is a simple example of using Tailwind CSS in a React project.
        </p>
        <h1 className="font-sans text-lg md:text-xl lg:text-2xl">
          Hello, Inter-Regular!
        </h1>
        <p className="font-serif text-base md:text-lg lg:text-xl">
          This is Playfair Display-Regular.
        </p>
      </div>
    </div>
  );
}

export default App;
