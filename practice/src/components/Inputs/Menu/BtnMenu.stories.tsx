import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BtnMenu from './index';

export default {
  title: 'Components/BtnMenu',
  component: BtnMenu,
} as Meta;

const Template: StoryFn = (args) => <BtnMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
};
