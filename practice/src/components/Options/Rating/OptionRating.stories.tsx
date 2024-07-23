import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Rating } from "components";

export default {
  title: "Components/OptionRating",
  component: Rating,
} as Meta;

const Template: StoryFn = () => <Rating />;

export const Default = Template.bind({});
