import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Modal } from "components";

import { Recipe } from "type/recipe";

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    onAddRecipe: { action: 'added recipe' },
  },
} as Meta;

const Template: StoryFn<{ onAddRecipe: (newRecipe: Recipe) => void }> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  onAddRecipe: (newRecipe: Recipe) => {
    console.log('Recipe added:', newRecipe);
  },
};
