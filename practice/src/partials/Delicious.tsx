import React from "react";

// Component
import { Delicious } from "components";

interface DeliSectionProps {
  items: { title: string; id: string; collection: number }[];
}

const DeliSection: React.FC<DeliSectionProps> = ({ items }) => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      {items.map((item, index) => (
        <Delicious
          key={index}
          title={item.title}
          id={item.id}
          collection={item.collection}
        />
      ))}
    </section>
  );
};

export default DeliSection;
