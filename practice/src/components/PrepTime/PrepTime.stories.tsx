import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PrepTime, { Props } from './index';

export default {
  title: 'Components/PrepTime',
  component: PrepTime,
} as Meta;

const Template: StoryFn<Props> = (args) => <PrepTime {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipe: {
    prepTime: {
      min: '10 minutes',
      max: '30 minutes'
    },
    serving: '4 servings'
  }
};
