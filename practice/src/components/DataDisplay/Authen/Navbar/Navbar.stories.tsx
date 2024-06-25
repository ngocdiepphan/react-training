import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Nav: StoryFn = (args) => <Navbar {...args} />;

export const Default = Nav.bind({});
Default.args = {};
