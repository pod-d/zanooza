import Button from "components/Button/Button";
import React, { useState } from "react";
import { CardWrapper, CarouselContainer } from "./CarouselCards.styled";
import { images, cardData, cardColors } from "./CardData";
import { BsArrowRightCircleFill } from "react-icons/bs";

const CarouselCards: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cardData.length);
  };
  
  let first = cardData[0];
  const newArr = [...cardData];
  const filtered = newArr.filter((data, index) => index !== 0);

  return (
    <CarouselContainer>
      {cardData.map((data, index) => (
        <CardWrapper
          key={index}
          style={{ backgroundColor: cardColors[index].cardBg }}
        >
          <img src={images[index]} alt="" />
          <p>{data}</p>
          {index % 2 === 0 && (
            <Button
              name={"Book now"}
              color={cardColors[index].btnBg}
              style={{
                width: "5.625rem",
                margin: "auto",
                fontSize: "0.875rem",
                padding: "10px",
              }}
            />
          )}
        </CardWrapper>
      ))}
      <BsArrowRightCircleFill className="nextCard" />
    </CarouselContainer>
  );
};

export default CarouselCards;
