import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Rating, { Star } from "./index";

export default {
  title: "Components/Rating",
  component: Rating,
} as Meta;

const Template: StoryFn<Star> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  ratings: 5,
};
