import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DrawerItem, { DrawerItemProps } from './index'; 

export default {
  title: 'Components/DrawerItem',
  component: DrawerItem,
} as Meta;

const Template: StoryFn<DrawerItemProps> = (args) => <DrawerItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Example Item',
  type: 'default',
  icon: 'default-icon',
};
