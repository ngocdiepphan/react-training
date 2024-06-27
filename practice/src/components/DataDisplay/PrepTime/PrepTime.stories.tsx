import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import PrepTime from "./index";

export default {
  title: "Components/PrepTime",
  component: PrepTime,
} as Meta;

const Template: StoryFn = (args) => <PrepTime {...args} />;

export const Default = Template.bind({});
Default.args = {};
