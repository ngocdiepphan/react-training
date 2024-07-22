import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Modal } from "components";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {};
