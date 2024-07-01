import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BtnSubmit, { BtnSubmitProps } from './index';

export default {
  title: 'Components/BtnSubmit',
  component: BtnSubmit,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<BtnSubmitProps> = (args) => <BtnSubmit {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  children: 'Click me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'button',
  children: 'Click me',
};

