import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { CategoryOption } from "components";

export default {
  title: "Components/OptionCategory",
  component: CategoryOption,
} as Meta;

const Template: StoryFn = () => <CategoryOption />;

export const Default = Template.bind({});
