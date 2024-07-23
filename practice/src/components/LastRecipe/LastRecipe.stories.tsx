import React from "react";
import { MemoryRouter } from "react-router-dom";
import { StoryFn, Meta } from "@storybook/react";

// Component
import { LastRecipe } from "components";

export default {
  title: "Components/LastRecipe",
  component: LastRecipe,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <LastRecipe {...args} />;

export const Default = Template.bind({});
Default.args = {};
