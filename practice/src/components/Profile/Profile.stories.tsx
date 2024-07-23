import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Profiles } from "components";

// Mock
import { profileData } from "mocks/profile";

export default {
  title: "Components/Profile",
  component: Profiles,
} as Meta;

const Template: StoryFn<typeof Profiles> = (args) => <Profiles {...args} />;

export const Default = Template.bind({});
Default.args = {
  profiles: profileData,
};
