import React from "react";

// Component
import { Button } from "components";

const Feedback: React.FC = () => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      <div className="mb-37 md:mb-40 border-b hover:border-b-8 hover:border-tertiary">
        <p className="text-3xl font-serif mb-18 md:mb-20 md:text-6xl">
          Already made this?
        </p>
        <Button type="button" variant="action">
          Share your feedback
        </Button>
      </div>
    </section>
  );
};

export default Feedback;
