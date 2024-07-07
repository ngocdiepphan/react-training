import React from 'react';
import Table from '../index';
import { TableColumn, UserRow } from 'type/table';
import { user } from 'mocks/user';

const userColumns: TableColumn<UserRow>[] = [
  { key: 'img', header: 'Image' },
  { key: 'username', header: 'Full Name' },
  { key: 'email', header: 'Email' }
];
const UserTable = () => (
  <Table columns={userColumns} data={user} />
);

export default UserTable;
