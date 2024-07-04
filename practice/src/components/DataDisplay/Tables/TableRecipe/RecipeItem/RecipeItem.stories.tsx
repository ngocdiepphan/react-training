import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RecipeItem from './index';
import { Recipe } from '../../../../../type/recipe';

export default {
  title: 'Components/RecipeItem',
  component: RecipeItem,
} as Meta;

const Template: StoryFn<Recipe> = (args) => <RecipeItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: 'http://localhost:1234/soup.30943852.png',
  name: 'Delicious Recipe',
  category: 'Dessert',
  creator: 'John Doe',
  ratings: 4.5,
  createdAt: 1627891234567,
  description: 'A delicious dessert that is easy to make and loved by everyone.'
};

export const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  img: 'http://localhost:1234/banner.cb63b542.pngs',
  name: 'Another Delicious Recipe',
  category: 'Main Course',
  creator: 'Jane Doe',
  ratings: 4.8,
  createdAt: 1627891234567,
  description: 'This is a longer description to showcase how the component handles more text. It provides a detailed explanation of the recipe, including the ingredients, preparation steps, and cooking instructions.'
};
