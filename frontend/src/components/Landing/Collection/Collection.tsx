import React, { Fragment, useState } from "react";
import { collections } from "./CollectionData";
import CollectionCard from "./CollectionCard";
import {
  CardsContainer,
  CollectionSectionWrapper,
  Top,
} from "./Collection.styled";
import Button from "components/Button/Button";

const Collection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const displayArrow = (index: number) => {
    setCurrentIndex(index);
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
          <Fragment key={index}>
            <CollectionCard
              experience={collection}
              experienceCount={"00 experiences"}
              handleMouseEnter={() => displayArrow(index)}
              index={index}
              currentIndex={currentIndex}
            />
          </Fragment>
        ))}
      </CardsContainer>
    </CollectionSectionWrapper>
  );
};

export default Collection;
