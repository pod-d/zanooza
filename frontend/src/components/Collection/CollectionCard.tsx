import React from "react";
import { Card, Left, Right } from "./Collection.styled";

interface CardProps {
  experience: string;
  experienceCount: string;
  handleMouseEnter: () => void;
}

const CollectionCard: React.FC<CardProps> = ({
  experience,
  experienceCount,
  handleMouseEnter,
}) => {
  return (
    <Card onMouseEnter={handleMouseEnter}>
      <Left></Left>
      <Right>
        <p className="experience">{experience}</p>
        <p className="count">{experienceCount}</p>
      </Right>
    </Card>
  );
};

export default CollectionCard;
