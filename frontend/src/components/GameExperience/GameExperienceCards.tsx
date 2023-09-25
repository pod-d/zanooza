import Button from "components/Button/Button";
import {
  CardBottom,
  FirstCardLeft,
  FirstCardRight,
  FirstCardWrapper,
  SecondCardImage,
  SecondCardWrapper,
  Virtual,
} from "./GameExperience.styled";
import { FirstCardProps, SecondCardProps } from "./GameExperienceData";
import { BsFillCameraVideoFill } from "react-icons/bs";

export const FirstCard: React.FC<FirstCardProps> = ({
  title,
  desc,
  innerBg,
  mainBg,
}) => {
  return (
    <FirstCardWrapper $outerBg={mainBg}>
      <FirstCardLeft>
        <h1>{title}</h1>
        <p>{desc}</p>
        <Button
          name="Book now"
          color={innerBg}
          style={{ color: "#121212", width: "fit-content" }}
        />
      </FirstCardLeft>
      <FirstCardRight $innerBg={innerBg}></FirstCardRight>
    </FirstCardWrapper>
  );
};

export const SecondCard: React.FC<SecondCardProps> = ({
  title,
  cost,
  desc,
  noOfPeople,
  duration,
  bgImg,
}) => {
  return (
    <SecondCardWrapper>
      <SecondCardImage $bgImg={bgImg}>
        <Virtual>
          <BsFillCameraVideoFill />
          <span>Virtual</span>
        </Virtual>
      </SecondCardImage>
      <h3>{title}</h3>
      <p className="cost-p">
        From <span className="cost">{cost}</span>
      </p>
      <p className="desc">{desc}</p>
      <CardBottom>
        <span>{noOfPeople}</span>
        <span>{duration}</span>
      </CardBottom>
    </SecondCardWrapper>
  );
};
