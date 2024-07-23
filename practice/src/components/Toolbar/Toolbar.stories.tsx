import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Toolbar } from "components";

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
  argTypes: {
    title: { control: 'text' },
    showTitle: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<{ title: string; showTitle: boolean }> = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'User',
  showTitle: true,
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  title: 'Recipe',
  showTitle: false,
};

