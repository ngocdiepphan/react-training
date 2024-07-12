import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NutritionFacts, { Props } from './index';
import { recipe } from '../../mocks/recipe';

export default {
  title: 'Components/NutritionFacts',
  component: NutritionFacts,
} as Meta;

const Template: StoryFn<Props> = (args) => <NutritionFacts {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipe: {
    nutrition: [
      { "label": "Calories", "value": "700" },
      { "label": "Total Fat", "value": "45g" },
      { "label": "Saturated Fat", "value": "18g" },
      { "label": "Cholesterol", "value": "300mg" },
  ]
  }
};
