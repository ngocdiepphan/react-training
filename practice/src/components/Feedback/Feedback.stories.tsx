import React from "react";
import { Meta, StoryFn } from "@storybook/react/*";

// Component
import { Feedback } from "components";

export default {
  title: "Components/Feedback",
  component: Feedback,
} as Meta;

const Template: StoryFn = (args) => <Feedback {...args} />;

export const Default = Template.bind({});
Default.args = {};
