import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import OptionCategory from './index';

export default {
  title: 'Components/OptionCategory',
  component: OptionCategory,
} as Meta;

const Template: StoryFn = () => <OptionCategory />;

export const Default = Template.bind({});
