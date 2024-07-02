import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DrawerItem, { DrawerItemProps } from './index';
import iconUser from "@/assets/images/dashboards/user-icon.svg";
import iconRecipe from "@/assets/images/dashboards/product-preview.png";

export default {
  title: 'Components/DrawerItem',
  component: DrawerItem,
} as Meta;

const Template: StoryFn<DrawerItemProps> = (args) => <DrawerItem {...args} />;

export const UserItem = Template.bind({});
UserItem.args = {
  title: 'User',
  type: 'user',
  image: iconUser,
};

export const RecipeItem = Template.bind({});
RecipeItem.args = {
  title: 'Recipes',
  type: 'recipe',
  image: iconRecipe,
};
