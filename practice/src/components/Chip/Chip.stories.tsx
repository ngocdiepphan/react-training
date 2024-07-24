// Chip.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Chip } from "components";

// Type
import { ChipProps } from "components/Chip";

const meta: Meta = {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    label: { control: "text" },
    icon: { control: "object" },
  },
};

export default meta;

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const Creator = Template.bind({});
Creator.args = {
  label: "Nina Marie",
  icon: (
    <img
      className="w-32 h-32 rounded-full"
      src="https://github.com/user-attachments/assets/e0b46fd8-2cda-4b50-84e1-481e4a6f1fd4"
      alt="Picture of Nina Marie"
    />
  ),
};

export const Date = Template.bind({});
Date.args = {
  label: "2024/07/24",
  icon: <span className="bg-create-date w-16 h-16 bg-no-repeat" />,
};

export const Comment = Template.bind({});
Comment.args = {
  label: "23",
  icon: <span className="bg-reply w-14 h-14 bg-no-repeat" />,
};
