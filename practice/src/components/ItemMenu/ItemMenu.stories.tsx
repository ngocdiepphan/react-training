import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

// Component
import { ItemMenu } from "components";

export default {
  title: "Components/ItemMenu",
  component: ItemMenu,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <ItemMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
