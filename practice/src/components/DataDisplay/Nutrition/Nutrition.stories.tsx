import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NutritionFacts, { NutritionFactsProps } from './index';
import { recipe } from '@/mocks/recipe';

export default {
  title: 'Components/NutritionFacts',
  component: NutritionFacts,
} as Meta;

const Template: StoryFn<NutritionFactsProps> = (args) => <NutritionFacts {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: recipe[0].nutrition,
};
