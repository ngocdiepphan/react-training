import React from "react";

interface ServingProp {
  serving: string;
}
const Serving = ({ serving }: ServingProp) => {
  return (
    <li className="flex flex-col px-20 border-r border-gray-400 hover:border-r-5 hover:border-primary">
      <p className="uppercase text-xs text-secondary">SERVINGS</p>
      <p className="uppercase text-sm flex flex-row gap-10">
        {serving}
        <span className="bg-serving w-16 h-16"></span>
      </p>
    </li>
  );
};

export default Serving;
