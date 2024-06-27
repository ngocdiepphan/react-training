import React from "react";
import InstructionItem from "../InstructionItem/index";
import { InstructionProps } from "@/type/recipe";

const Instruction: React.FC<InstructionProps> = ({ instruction }) => {
  return (
    <article className="">
      <h5 className="font-serif text-xl my-27 md:text-3xl">Instructions</h5>
      <ul className="flex flex-col gap-30 mt-30">
        {instruction.map((instruction, index) => (
          <InstructionItem
            key={index}
            stepNumber={index + 1}
            stepDescription={instruction}
          />
        ))}
      </ul>
    </article>
  );
};

export default Instruction;
