import React from "react";

export interface InstructionItemProps {
  stepNumber: number;
  stepDescription: string;
}

const InstructionItem: React.FC<InstructionItemProps> = ({
  stepNumber,
  stepDescription,
}) => {
  return (
    <li className="flex flex-row gap-10">
      <div className="h-24 w-24 bg-quaternary text-white text-center">
        {stepNumber}
      </div>
      <p className="font-sans text-xs md:text-lg w-331 md:w-278 lg:w-420">
        {stepDescription}
      </p>
    </li>
  );
};

export default InstructionItem;
