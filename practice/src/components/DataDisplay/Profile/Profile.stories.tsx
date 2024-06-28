import React from "react";
import Profiles from "./index";
import { profileData } from "@/mocks/profile";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Profile",
  component: Profiles,
} as Meta;

const Template: StoryFn<typeof Profiles> = (args) => <Profiles {...args} />;

export const Default = Template.bind({});
Default.args = {
  profiles: profileData,
};
