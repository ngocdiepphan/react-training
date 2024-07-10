import React from "react";
import Button from "../../Inputs/Buttons/index";

const Feedback: React.FC = () => {
  return (
    <>
      <p className="text-3xl font-serif mb-18 md:mb-20 md:text-6xl">
        Already made this?
      </p>
      <Button type="button" variant="action">
        Share your feedback
      </Button>
    </>
  );
};

export default Feedback;
