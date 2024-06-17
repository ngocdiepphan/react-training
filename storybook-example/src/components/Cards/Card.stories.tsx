import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Card from "./Card";
import CardProps from "./type";
import myImage from "../../assets/images/crispy-orange-chips.png";

export default {
  title: "Example/Card",
  component: Card,
} as Meta;

const Template = (args: CardProps) => <Card {...args} />;

export const Primary = () => (
  <Template
    width={400}
    image={myImage}
    header="Card Header"
    title="Card Title"
    description="This is a description of the card."
  />
);

export const Small = () => (
  <Template
    width={200}
    image={myImage}
    header="Small Image Header"
    title="Small Image Card"
    description="This card has a Small image and description."
  />
);

export const Big = () => (
  <Template
    width={600}
    image={myImage}
    header="Big Image Header"
    title="Big Image Title"
    description="This card has a Big image, title, and description."
  />
);
