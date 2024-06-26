import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import IngredientItem, { IngredientItemProps } from '../IngredientItem/index';

export default {
  title: 'Components/IngredientItem',
  component: IngredientItem,
} as Meta;

const Template: StoryFn<IngredientItemProps> = (args) => <IngredientItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '2 chicken breasts, grilled and sliced',
};
