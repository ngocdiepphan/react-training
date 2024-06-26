import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import NutritionItem, { NutritionItemProps } from "./index";

export default {
  title: "Components/NutritionItem",
  component: NutritionItem,
} as Meta;

const Template: StoryFn<NutritionItemProps> = (args) => (
  <NutritionItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Calories",
  value: "350",
};

export const TotalFat = Template.bind({});
TotalFat.args = {
  label: "Total Fat",
  value: "20g",
};

export const Sodium = Template.bind({});
Sodium.args = {
  label: "Sodium",
  value: "800mg",
};
