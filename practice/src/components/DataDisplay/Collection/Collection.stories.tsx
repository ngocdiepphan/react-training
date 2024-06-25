import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Collection from './index';

export default {
  title: 'Components/Collection',
  component: Collection,
} as Meta;

const Template: StoryFn = (args) => <Collection {...args} />;

export const Default = Template.bind({});
Default.args = {};
