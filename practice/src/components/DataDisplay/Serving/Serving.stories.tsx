import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Serving from "./index";

export default {
  title: "Components/Serving",
  component: Serving,
} as Meta;

const Template: StoryFn = (args) => <Serving {...args} />;

export const Default = Template.bind({});
Default.args = {};
