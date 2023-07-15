import React from "react";
import { HeroContainer, HeroLeft, HeroRight } from "./Hero.styled";
import Button from "components/Button/Button";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroLeft>
        <p className="desc">Africa's Innovative</p>
        <strong className="social">Social Gaming</strong>
        <strong className="social">Company</strong>
        <p className="details">
          We create unforgettable experiences that build lifelong friendships,
          communication & teamwork. Discover & Book hundreds of memorable games
          & game experiences.
        </p>
        <div className="bookjoinbtns">
          <Button
            name={"Book our Experience"}
            color={"var(--primary-colors-purple-purple-600, #9031D0)"}
          />
          <Button
            name={"Join our community"}
            color={"var(--primary-colors-purple-purple-100, #F3EBFA)"}
            style={{
              color: "var(--primary-colors-purple-purple-500, #A456D8)",
            }}
          />
        </div>
        <div className="smalltext">
          <div className="blink">
            <div className="greendot"></div>
          </div>
          <p>
            More than<span className="greentext"> 2K Active Play Times</span>
          </p>
        </div>
      </HeroLeft>
      <HeroRight></HeroRight>
    </HeroContainer>
  );
};

export default Hero;
