import React from "react";
import { Card, Left, Right } from "./Collection.styled";
import { BsArrowRightShort } from "react-icons/bs";

interface CardProps {
  experience: string;
  experienceCount: string;
  index: number;
  currentIndex: number;
  handleMouseEnter: () => void;
}

const CollectionCard: React.FC<CardProps> = ({
  experience,
  experienceCount,
  index,
  currentIndex,
  handleMouseEnter,
}) => {
  return (
    <Card onMouseEnter={handleMouseEnter}>
      <Left></Left>
      <Right>
        <p className="experience">{experience}</p>
        <p className="count">{experienceCount}</p>
        {index === currentIndex && <BsArrowRightShort className="arrowRight" />}
      </Right>
    </Card>
  );
};

export default CollectionCard;
