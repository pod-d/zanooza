import Button from "components/Button/Button";
import {
  ButtomLine,
  CardDetails,
  CardImage,
  CardLeft,
  CardRight,
  EventsCardWrapper,
} from "./Events.styled";
import { EventProps } from "./EventsData";

const EventsCard: React.FC<EventProps> = ({
  image,
  eventName,
  eventDate,
  venue,
  organizer,
  gateFee,
  btnLabel,
  index,
  currentIndex,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <EventsCardWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardImage $bgImg={image}></CardImage>
      <CardDetails>
        <CardLeft>
          <p>{eventName}</p>
          <p>{eventDate}</p>
          <p>{venue}</p>
          <p className="organizer">{organizer}</p>
        </CardLeft>
        <CardRight>
          <span>{gateFee}</span>
          <Button name={btnLabel} color="#fff" style={{ color: "#A456D8" }} />
        </CardRight>
      </CardDetails>
      {index === currentIndex && <ButtomLine></ButtomLine>}
    </EventsCardWrapper>
  );
};

export default EventsCard;
