import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Creator from './index';

export default {
  title: 'Components/Creator',
  component: Creator,
} as Meta;

const Template: StoryFn = (args) => <Creator {...args} />;

export const Default = Template.bind({});
Default.args = {};
