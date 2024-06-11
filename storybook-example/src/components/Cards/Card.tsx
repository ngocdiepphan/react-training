import React from "react";
import "./Card.css";
import CardProps from "./type";

const Card: React.FC<CardProps> = ({
  width,
  image,
  header,
  title,
  description,
}) => {
  return (
    <div style={{ width: `${width}px` }} className="item">
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
