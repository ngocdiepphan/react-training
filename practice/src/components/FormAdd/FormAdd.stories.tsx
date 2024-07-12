import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import FormAdd from "./index";

export default {
  title: "Components/FormAdd",
  component: FormAdd,
} as Meta;

const Template: StoryFn = (args) => <FormAdd {...args} />;

export const Default = Template.bind({});
Default.args = {};
