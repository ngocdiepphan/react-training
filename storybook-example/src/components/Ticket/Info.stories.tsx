import React from 'react';
import { Meta, StoryFn } from "@storybook/react/types-6-0";
import TicketProps from "./type";
import Info from "./Info";
import imagePrimary from "../../../src/assets/images/silky-smooth-panacotta.png";
import imageSecondary from "../../../src/assets/images/blue-velvet-brownies.png";
import imageTertiary from "../../../src/assets/images/healthy-jam-waffle-breakfast.png";
import imageQuaternary from "../../../src/assets/images/caramel-blueberry-scones.png";

export default {
  title: 'Ticket/Info',
  component: Info,
} as Meta;

export const Template: StoryFn<TicketProps> = (args: TicketProps) => <Info {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: imagePrimary,
  title: "Super Delicious",
  name: "Silky Smooth Pana Cotta",
  price: 50000,
  description: "A silky smooth pana cotta that melts in your mouth."
};

export const Secondary = Template.bind({});
Secondary.args = {
  image: imageSecondary,
  title: "Chocolate Delight",
  name: "Decadent Chocolate Cake",
  price: 75000,
  description: "Rich and moist chocolate cake with a hint of coffee."
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  image: imageTertiary,
  title: "Creamy Cheesecake",
  name: "Classic New York Cheesecake",
  price: 65000,
  description: "A classic New York cheesecake with a creamy texture."
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  image: imageQuaternary,
  title: "Zesty Lemon Tart",
  name: "Refreshing Lemon Tart",
  price: 55000,
  description: "A refreshing lemon tart with a buttery crust."
};
