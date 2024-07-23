import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { Delicious } from "components";

export default {
  title: "Components/Delicious",
  component: Delicious,
} as Meta;

const Template: StoryFn = (args) => <Delicious {...args} />;

export const Default = Template.bind({});
Default.args = {};
