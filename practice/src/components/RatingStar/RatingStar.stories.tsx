import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { Rating } from "components";

// Type
import { Star } from "components/RatingStar";

export default {
  title: "Components/Rating",
  component: Rating,
} as Meta;

const Template: StoryFn<Star> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  ratings: 5,
};
