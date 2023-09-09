import React, { useState } from "react";
import { collections } from "./CollectionData";
import CollectionCard from "./CollectionCard";
import {
  CardsContainer,
  CollectionSectionWrapper,
  Top,
} from "./Collection.styled";
import Button from "components/Button/Button";
import { BsArrowRightShort } from "react-icons/bs";

const Collection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const displayArrow = (index: number) => {
    // setCurrentIndex((prevIndex) => (prevIndex = index));
  };
  return (
    <CollectionSectionWrapper>
      <Top>
        <h3>Our Collection 💼</h3>
        <Button
          name={"View all items"}
          color={"#fff"}
          style={{ color: "#a456d8" }}
        />
      </Top>
      <CardsContainer>
        <div className="pinkcircle circle1"></div>
        <div className="pinkcircle circle2"></div>
        <div className="pinkcircle circle3"></div>
        <div className="pinkcircle circle4"></div>
        {collections.map((collection, index) => (
          <>
            <CollectionCard
              key={index}
              experience={collection}
              experienceCount={"00 experiences"}
              handleMouseEnter={() => displayArrow(index)}
            />
            {index === currentIndex && (
              <BsArrowRightShort className="arrowRight" />
            )}
          </>
        ))}
      </CardsContainer>
    </CollectionSectionWrapper>
  );
};

export default Collection;
