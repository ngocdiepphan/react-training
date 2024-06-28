import React from "react";
import InstructionItem from "../InstructionItem/index";
import { InstructionProps } from "@/type/recipe";

const Instruction: React.FC<InstructionProps> = ({ instruction }) => {
  return (
    <article className="">
      <h5 className="font-serif text-xl my-27 md:text-3xl">Instructions</h5>
      <ul className="flex flex-col gap-30 mt-30">
        {instruction.map((step, index) => (
          <InstructionItem
            key={index}
            stepNumber={step.step}
            stepDescription={step.description}
          />
        ))}
      </ul>
    </article>
  );
};

export default Instruction;
