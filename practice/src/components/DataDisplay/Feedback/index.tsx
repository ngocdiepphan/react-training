import React from "react";
import Button from "@/components/Inputs/Buttons";
const Feedback: React.FC = () => {
  return (
    <div className="mb-37 md:mb-40 border-b hover:border-b-8 hover:border-tertiary">
      <p className="text-3xl font-serif mb-18 md:mb-20 md:text-6xl">
        Already made this?
      </p>
      <Button type="button" variant="feedback">
        Share your feedback
      </Button>
    </div>
  );
};

export default Feedback;
