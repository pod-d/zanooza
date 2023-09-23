import Button from "components/Button/Button";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { FindOutWrapper } from "./FindOut.styled";
import vrheadset from "../../../assets/vrheadset.png";
import play from "../../../assets/play.png";
import gamepad from "../../../assets/gamepad.png";
import plus1 from "../../../assets/plus1.png";
import plus2 from "../../../assets/plus2.png";

const FindOut = () => {
  return (
    <FindOutWrapper>
      <p>
        Find out what <span>activity suits your type of event</span> and the
        estimated total cost
      </p>
      <Button
        name={`Estimate your event`}
        icon={<BiRightArrowAlt />}
        color={"#9031D0"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          fontSize: "1.125rem",
          fontWeight: "700",
          marginTop: "1rem",
        }}
      />
      <img className="floating vr" src={vrheadset} alt="vrheadset" />
      <img className="floating p1" src={plus1} alt="plus sign" />
      <img className="floating pl" src={play} alt="play" />
      <img className="floating p2" src={plus2} alt="plus sign" />
      <img className="floating gp" src={gamepad} alt=" game pad" />
    </FindOutWrapper>
  );
};

export default FindOut;
