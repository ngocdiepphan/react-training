import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { Category } from "components";

// Mock
import { recipe } from "mocks/recipe";

export default {
  title: "Components/Category",
  component: Category,
} as Meta;

const Template: StoryFn = (args) => <Category {...args} />;

export const Default = Template.bind({});
Default.args = { recipe };
