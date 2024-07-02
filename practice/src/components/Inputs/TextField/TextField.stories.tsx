import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import InputField, { InputFieldProps } from "./index";

export default {
  title: "Components/Inputs/InputField",
  component: InputField,
} as Meta;

const Template: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Name",
  type: "text",
  id: "name",
  name: "name",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Category",
  type: "text",
  id: "category",
  name: "category",
  variant: "secondary",
};
