import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { IngredientItem } from "components";

// Type
import { IngredientItemProps } from "components/Ingredient/IngredientItem";

export default {
  title: "Components/IngredientItem",
  component: IngredientItem,
} as Meta;

const Template: StoryFn<IngredientItemProps> = (args) => (
  <IngredientItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "250ml sour cream",
};
