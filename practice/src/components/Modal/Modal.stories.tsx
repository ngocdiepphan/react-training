import React from "react";
import { Meta, StoryFn } from "@storybook/react";

// Component
import { Modal } from "components";

// Types
import { Recipe } from "type/recipe";
import { ModalProps } from "components/Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    onAddRecipe: { action: "added recipe" },
  },
} as Meta;

const Template: StoryFn<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  onAddRecipe: (newRecipe: Recipe) => {
    console.log("Recipe added:", newRecipe);
  },
};
