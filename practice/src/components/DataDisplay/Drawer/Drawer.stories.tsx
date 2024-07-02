import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Drawer from '@/components/DataDisplay/Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as Meta;

const Template: StoryFn = (args) => <Drawer {...args} />;

export const Default = Template.bind({});

Default.args = {};
