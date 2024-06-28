import React from "react";
import BtnFeedback from "@/components/Inputs/BtnFeedback";

const Feedback: React.FC = () => {
  return (
    <div className="mb-37 md:mb-40 border-b hover:border-b-8 hover:border-tertiary">
      <p className="text-3xl font-serif mb-18 md:mb-20 md:text-6xl">
        Already made this?
      </p>
      <BtnFeedback />
    </div>
  );
};

export default Feedback;
