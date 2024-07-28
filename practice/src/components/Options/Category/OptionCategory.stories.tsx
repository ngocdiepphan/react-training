import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { OptionCategory } from "components";

export default {
  title: "Components/OptionCategory",
  component: OptionCategory,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn<{
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = (args) => <OptionCategory {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (e) => console.log("Selected category:", e.target.value),
};
