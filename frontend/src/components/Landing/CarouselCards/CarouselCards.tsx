import Button from "components/Button/Button";
import React, { useRef, useState } from "react";
import { CardWrapper, CarouselContainer } from "./CarouselCards.styled";
import { images, cardData, cardColors } from "./CardData";
import {
  BsArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const CarouselCards: React.FC = () => {
  const [left, setLeft] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scroll = (direction: "left" | "right", amount: number) => {
    if (scrollContainerRef.current) {
      if (direction === "left") {
        // Scroll to the left
        scrollContainerRef.current.scrollLeft -= amount;
        setLeft(scrollContainerRef.current.scrollLeft);
      } else if (direction === "right") {
        // Scroll to the right
        scrollContainerRef.current.scrollLeft += amount;
        setLeft(scrollContainerRef.current.scrollLeft);
      }
    }
  };

  scrollContainerRef.current?.addEventListener("scroll", function name() {
    // if (scrollContainerRef.current?.scrollLeft) {
    // }
  });
  console.log(scrollContainerRef.current?.scrollLeft);

  return (
    <CarouselContainer ref={scrollContainerRef}>
      {left > 0 && (
        <BsFillArrowLeftCircleFill
          className="nextCard left"
          onClick={() => scroll("left", 100)}
        />
      )}
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
      <BsArrowRightCircleFill
        className="nextCard"
        onClick={() => scroll("right", 100)}
      />
    </CarouselContainer>
  );
};

export default CarouselCards;
