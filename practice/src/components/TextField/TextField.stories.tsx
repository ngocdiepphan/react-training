import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { InputField } from "components";

// Type
import { InputFieldProps } from "components/TextField";

export default {
  title: "Components/InputField",
  component: InputField,
} as Meta;

const Template: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;

export const InputBorder = Template.bind({});
InputBorder.args = {
  label: "Name",
  type: "text",
  name: "name",
  variant: "primary",
};

export const InputForm = Template.bind({});
InputForm.args = {
  label: "Category",
  type: "text",
  name: "category",
  variant: "secondary",
};
