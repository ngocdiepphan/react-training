import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Ingredient, { Props } from './index';

export default {
  title: 'Components/Ingredient',
  component: Ingredient,
} as Meta;

const Template: StoryFn<Props> = (args) => <Ingredient {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipe: {
    ingredient: [
      '1 cup flour',
      '2 eggs',
      '1/2 cup milk',
      '1 tbsp sugar',
      '1 tsp vanilla extract',
    ],
  },
};

