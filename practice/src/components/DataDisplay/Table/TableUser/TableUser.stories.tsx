import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UserTable from './index';
import { user } from 'mocks/user';
import { TableColumn, UserRow } from 'type/table';

export default {
  title: 'Components/UserTable',
  component: UserTable,
} as Meta;

const userColumns: TableColumn<UserRow>[] = [
  { key: 'img', header: 'Image' },
  { key: 'username', header: 'Full Name' },
  { key: 'email', header: 'Email' }
];

const Template: StoryFn = (args) => <UserTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: userColumns,
  data: user,
};
