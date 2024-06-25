import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Banner from './index';

export default {
  title: 'Components/Banner',
  component: Banner,
} as Meta;

const Template: StoryFn = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {};
