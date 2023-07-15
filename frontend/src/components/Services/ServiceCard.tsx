import React from "react";
import { CardWrapper, IconWrapper } from "./ServiceCard.styled";

interface ServiceCardProps {
  background: string;
  icon: any;
  text: string;
  iconBackground: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  background,
  icon,
  text,
  iconBackground,
}) => {
  return (
    <CardWrapper style={{ background: background }}>
      <IconWrapper style={{ background: iconBackground }}>
        <img src={icon} alt="card icon" />
      </IconWrapper>
      <p>{text}</p>
    </CardWrapper>
  );
};

export default ServiceCard;
