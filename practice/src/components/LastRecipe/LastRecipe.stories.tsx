import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

// Component
import LastRecipe from "components/LastRecipe";

// Type
import { Recipe } from "type/recipe";

export default {
  title: "Components/LastRecipe",
  component: LastRecipe,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn<{ recipes: Recipe[] }> = (args) => (
  <LastRecipe {...args} />
);

export const Default = Template.bind({});
Default.args = {
  recipes: [
    {
      name: "Spinach and Cheese Pasta",
      img: "https://github.com/user-attachments/assets/f29b4e79-4f1e-4b41-9fc8-3a21b3eca500",
      description:
        "A delicious pasta dish with creamy spinach and cheese sauce, perfect for a quick and comforting meal.",
      ingredient: [
        "2 tablespoons olive oil",
        "3 cloves garlic, minced",
      ],
      instruction: [
        {
          step: 1,
          description:
            "Cook pasta according to package instructions until al dente. Drain and set aside.",
        },
      ],
      nutrition: [
        {
          label: "Calories",
          value: "550",
        },
        {
          label: "Total Fat",
          value: "32g",
        },
      ],
      creator: "Jack Ryan",
      imgCreator: "https://github.com/user-attachments/assets/bbdb4e2c-e163-4c94-b129-a8999920d7a8",
      collection_id: 4,
      category: "Main Course",
      ratings: 5,
      createdAt: "2024-07-16",
      id: "26",
      prepTime: {
        min: "20 minutes",
        max: "25 minutes",
      },
      serving: "Serves 4",
      comments: 30,
    },
  ],
};
