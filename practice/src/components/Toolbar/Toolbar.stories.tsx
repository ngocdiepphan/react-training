import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Toolbar } from "components";

export default {
  title: "Components/Toolbar",
  component: Toolbar,
} as Meta;

const Template: StoryFn = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
