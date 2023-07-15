import React from "react";
import { serviceCardData } from "./ServiceCardData";
import ServiceCard from "./ServiceCard";
import { ServiceCardsContainer } from "./ServiceCard.styled";

const Services = () => {
  return (
    <ServiceCardsContainer>
      <h1>OUR SERVICES</h1>
      {serviceCardData.map((data, index) => (
        <ServiceCard
          key={index}
          background={data.bgColor}
          icon={data.icon}
          text={data.text}
          iconBackground={data.iconBgColor}
        />
      ))}
    </ServiceCardsContainer>
  );
};

export default Services;
