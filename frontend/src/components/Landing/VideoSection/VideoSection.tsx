import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { bottomText } from "./BottomText";
import {
  BottomTextWrapper,
  DarkBackground,
  PlayBtn,
  VideoSectionWrapper,
} from "./VideoSection.styled";
import { AiOutlinePause } from "react-icons/ai";
import myGif from "../../../assets/gif.gif";
import screenShot from "../../../assets/paused.png";

const VideoSection = () => {
  const [play, setPlay] = useState<boolean>(false);
  return (
    <VideoSectionWrapper>
      <h3>Learn what we do, end-to-end, in 2 minutes</h3>
      <DarkBackground $bgImg={play ? myGif : screenShot}>
        <PlayBtn>
          {play ? (
            <AiOutlinePause className="play" onClick={() => setPlay(false)} />
          ) : (
            <FaPlay className="play" onClick={() => setPlay(true)} />
          )}
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
