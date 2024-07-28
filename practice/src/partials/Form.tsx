import React from "react";

// Component
import { Button } from "components";

const FormSection: React.FC = () => {
  return (
    <section className="flex flex-col text-center gap-20 bg-subscriptPrimary mt-64 px-16 md:px-102 lg:px-278 py-66 md:py-96">
      <h3 className="font-serif text-4xl md:text-large leading-none">
        Deliciousness to your inbox
      </h3>
      <p className="text-xs md:text-2xl">
        Enjoy weekly hand picked recipes and recommendations
      </p>
      <div className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-0">
        <input
          type="text"
          className="h-48 pl-20 md:w-500 rounded-md md:h-64 md:rounded-tl-md md:rounded-bl-md md:rounded-r-none md:border-r-white"
        />
        <Button type="button" variant="join">
          join
        </Button>
      </div>
      <p className="text-small">
        By joining our newsletter you agree to our Terms and Conditions
      </p>
    </section>
  );
};

export default FormSection;
