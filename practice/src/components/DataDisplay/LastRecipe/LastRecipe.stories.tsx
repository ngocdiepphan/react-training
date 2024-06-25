import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import LastRecipe from './index';

export default {
  title: 'Components/LastRecipe',
  component: LastRecipe,
} as Meta;

const Template: StoryFn = (args) => <LastRecipe {...args} />;

export const Default = Template.bind({});
Default.args = {};
