import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Toolbar from './index';

export default {
  title: 'Example/Toolbar',
  component: Toolbar,
} as Meta;

const Template: StoryFn = (args) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
