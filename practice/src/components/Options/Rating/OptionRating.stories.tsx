import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Rating } from "components";

export default {
  title: 'Components/OptionRating',
  component: Rating,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<{ onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (e) => console.log('Selected rating:', e.target.value),
};
