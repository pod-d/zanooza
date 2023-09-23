import Button from "components/Button/Button";
import React from "react";
import { cardContent } from "./TrendingData";
import TrendingCard from "./TrendingCard";
import { AllCards, TrendingWrapper } from "./Trending.styled";

const Trending = () => {
  return (
    <TrendingWrapper>
      <div className="sectiontop">
        <h3>Trending Game Experiences</h3>
        <Button
          name={"View all items"}
          color={"#fff"}
          style={{ color: "#A456D8", fontSize: "0.875rem", fontWeight: "500" }}
        />
      </div>
      <AllCards>
        {cardContent.map((content, index) => (
          <TrendingCard
            key={index}
            bgImg={content.bgImage}
            title={content.title}
            description={content.details}
          />
        ))}
      </AllCards>
    </TrendingWrapper>
  );
};

export default Trending;
