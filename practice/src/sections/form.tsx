import React from "react";

// Component
import { Form } from "components";

const FormSection: React.FC = () => {
  return (
    <section className="flex flex-col text-center gap-20 bg-subscriptPrimary mt-64 px-16 md:px-102 lg:px-278 py-66 md:py-96">
      <h3 className="font-serif text-4xl md:text-large leading-none">
        Deliciousness to your inbox
      </h3>
      <p className="text-xs md:text-2xl">
        Enjoy weekly hand picked recipes and recommendations
      </p>
      <Form />
      <p className="text-small">
        By joining our newsletter you agree to our Terms and Conditions
      </p>
    </section>
  );
};

export default FormSection;
