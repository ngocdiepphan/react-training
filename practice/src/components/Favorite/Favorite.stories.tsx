import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Components
import { Favorite } from "components";

// Type
import { FavoriteProps } from "components/Favorite";

export default {
  title: "Components/Favorite",
  component: Favorite,
  argTypes: {
    favoriteCount: { control: { type: "number" } },
  },
} as Meta;

const Template: StoryFn<FavoriteProps> = (args) => <Favorite {...args} />;

export const Default = Template.bind({});
Default.args = {
  favoriteCount: 10,
};
