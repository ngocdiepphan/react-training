import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NutritionFacts from './index'; 

export default {
  title: 'Components/NutritionFacts',
  component: NutritionFacts,
} as Meta;

const Template: StoryFn = (args) => <NutritionFacts {...args} />;

export const Default = Template.bind({});
Default.args = {};
