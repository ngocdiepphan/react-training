import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Panel from './index';

export default {
  title: 'Components/Panel',
  component: Panel,
} as Meta;

const Template: StoryFn = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {};
