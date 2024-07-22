// TableCell.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableCell from './index';
import { TableColumn } from 'type/table';

// Định nghĩa kiểu dữ liệu cho câu chuyện
interface ItemType {
  id: number;
  username: string;
  email: string;
  img: string;
}



// Cung cấp dữ liệu mẫu cho câu chuyện
const data: ItemType[] = [
  {
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    img: 'https://github.com/user-attachments/assets/b4bfd33c-7614-4bbd-b1c5-5b7e27ff0246',
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    img: 'https://github.com/user-attachments/assets/bbdb4e2c-e163-4c94-b129-a8999920d7a8',
  },
];

// Cấu hình Meta cho Storybook
const meta: Meta = {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    // Cung cấp thông tin cho các thuộc tính của component
  },
};

export default meta;

// Câu chuyện chính cho component TableCell
const Template: StoryFn<{ column: TableColumn<ItemType>; item: ItemType[keyof ItemType] }> = (args) => <TableCell {...args} />;

export const ImageCell = Template.bind({});
ImageCell.args = {

};

export const TextCell = Template.bind({});
TextCell.args = {
};
