import React from "react";
import { CardContainer } from "./Trending.styled";

interface CardProps {
  bgImg: string;
  title: string;
  description: string;
}

const TrendingCard: React.FC<CardProps> = ({ bgImg, title, description }) => {
  return (
    <CardContainer>
      <div
        className="cardimage"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>
      <h6>{title}</h6>
      <p>{description}</p>
    </CardContainer>
  );
};

export default TrendingCard;
