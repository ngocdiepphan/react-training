import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Ingredient from './index';
import { IngredientProps } from '@/type/recipe';
import { recipe } from '@/mocks/recipe';

export default {
  title: 'Components/Ingredient',
  component: Ingredient,
} as Meta;

const Template: StoryFn<IngredientProps> = (args) => <Ingredient {...args} />;

export const Default = Template.bind({});
Default.args = {
  ingredients: recipe[0].ingredient,
};
