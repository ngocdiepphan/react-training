import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { Form } from "components";

export default {
  title: "Components/Form",
  component: Form,
} as Meta;

const Template: StoryFn = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
