import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import BtnJoin from './index';

export default {
  title: 'Components/BtnJoin',
  component: BtnJoin,
} as Meta;

const Template: StoryFn = (args) => <BtnJoin {...args} />;

export const Default = Template.bind({});
Default.args = {};
