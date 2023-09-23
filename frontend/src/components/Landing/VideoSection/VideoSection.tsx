import React from "react";
import { FaPlay } from "react-icons/fa";
import { bottomText } from "./BottomText";
import {
  BottomTextWrapper,
  DarkBackground,
  PlayBtn,
  VideoSectionWrapper,
} from "./VideoSection.styled";

const VideoSection = () => {
  return (
    <VideoSectionWrapper>
      <h3>Learn what we do, end-to-end, in 2 minutes</h3>
      <DarkBackground>
        <PlayBtn>
          <FaPlay className="play" />
        </PlayBtn>
      </DarkBackground>
      <BottomTextWrapper>
        {bottomText.map((item, index) => (
          <div key={index} className="eachtext">
            <img src={item.icon} alt="icon" />
            <p>{item.text}</p>
          </div>
        ))}
      </BottomTextWrapper>
    </VideoSectionWrapper>
  );
};

export default VideoSection;
