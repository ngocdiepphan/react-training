import React from "react";

// Component
import { Delicious } from "components";

// Type
import { Recipe } from "type/recipe";

interface DeliSectionProps {
  items: { title: string; id: string; collection: number }[];
  recipes: Recipe[];
}

const DeliSection = ({ items, recipes }: DeliSectionProps) => {
  return (
    <section className="mx-12 md:mx-102 lg:mx-30">
      {items.map((item) => (
        <Delicious
          key={item.id}
          title={item.title}
          collection={item.collection}
          recipes={recipes}
        />
      ))}
    </section>
  );
};

export default DeliSection;
