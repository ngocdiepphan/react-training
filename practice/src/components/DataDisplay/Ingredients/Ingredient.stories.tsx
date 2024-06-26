import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Ingredient from '../Ingredients/index';

export default {
  title: 'Components/Ingredient',
  component: Ingredient,
} as Meta;

const Template: StoryFn = (args) => <Ingredient {...args} />;

export const Default = Template.bind({});
Default.args = {};
