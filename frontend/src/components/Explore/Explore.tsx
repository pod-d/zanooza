import React, { useEffect, useState } from "react";
import { gameExperiences, imagesArr, options } from "./ExploreData";
import { SectionWrapper, ImageContainer, Right, Left } from "./Explore.styled";
import Button from "components/Button/Button";

const Explore = () => {
  const [displayText, setDisplayText] = useState<string>(gameExperiences[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        const currentIndex = gameExperiences.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % gameExperiences.length;
        return gameExperiences[nextIndex];
      });
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper>
      <Left>
        <div className="content">
          <h2>Explore Unforgettable Game Experiences for</h2>
          <h2 className="teamBuilding">{displayText}</h2>
          <div className="options">
            {options.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
          </div>
          <Button
            name={"Book now"}
            color={"var(--primary-colors-purple-purple-500, #A456D8)"}
            style={{
              width: "9.375rem",
              height: "3.5rem",
              fontSize: "1.125rem",
            }}
          />
        </div>
      </Left>
      <Right>
        {imagesArr.map((image, index) => (
          <ImageContainer
            key={index}
            style={{ backgroundImage: `url(${image})` }}
          ></ImageContainer>
        ))}
      </Right>
    </SectionWrapper>
  );
};

export default Explore;
