import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

// Component
import { Delicious } from "components";

export interface RecipeList {
  title: string;
  id: string;
  collection: number;
  recipes: Recipe[];
}
export interface Recipe {
  id: string;
  name: string;
  img: string;
  ratings: number;
}
export default {
  title: "Components/Delicious",
  component: Delicious,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn<RecipeList> = (args) => <Delicious {...args} />;


export const Default = Template.bind({});
Default.args = {
  title: "Supper Delicious",
  id: "recipe-list",
  collection: 1,
  recipes: [
    {
      id: "3",
      name: "Tiramisu",
      img: "https://github.com/user-attachments/assets/c8cd8def-589a-4881-a190-787f7222c402",
      ratings: 5,
    },
  ],
};
