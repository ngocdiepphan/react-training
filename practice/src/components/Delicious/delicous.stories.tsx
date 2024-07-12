import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Delicious from './index'; 

export default {
  title: 'Components/Delicious',
  component: Delicious,
} as Meta;

const Template: StoryFn = (args) => <Delicious {...args} />;

export const Default = Template.bind({});
Default.args = {};
