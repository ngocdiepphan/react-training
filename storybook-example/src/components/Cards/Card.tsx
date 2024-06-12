import React from "react";
import "./Card.css";
import CardProps from "./type";
import '../../../build/input.css';

const Card: React.FC<CardProps> = ({
  width,
  image,
  header,
  title,
  description,
}) => {
  return (
    <div style={{ width: `${width}px` }} className="text-center font-bold">
      <img src={image} alt={title} />
      <div>
        <h2>{header}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
