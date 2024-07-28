import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Ingredient } from "components";

// Type
import { IngredientProps } from "components/Ingredient";

export default {
  title: "Components/Ingredient",
  component: Ingredient,
} as Meta;

const Template: StoryFn<IngredientProps> = (args) => <Ingredient {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    "1 cup flour",
    "2 eggs",
    "1/2 cup milk",
    "1 tbsp sugar",
    "1 tsp vanilla extract",
  ],
};
