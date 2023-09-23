import React from "react";
import { EventsCards, EventsWrapper, Top } from "./Events.styled";
import Button from "components/Button/Button";
import { eventsDetails } from "./EventsData";
import EventsCard from "./EventsCard";

const Events = () => {
  return (
    <EventsWrapper>
      <Top>
        <p>Events and Tournaments 🎪</p>
        <Button
          name="View all events"
          color="#fff"
          style={{ color: "#a456d8" }}
        />
      </Top>
      <EventsCards>
        {eventsDetails.map((detail, index) => (
          <EventsCard
            key={index}
            image={detail.image}
            eventName={detail.eventName}
            eventDate={detail.eventDate}
            venue={detail.venue}
            organizer={detail.organizer}
            gateFee={detail.gateFee}
            btnLabel={detail.btnLabel}
          />
        ))}
      </EventsCards>
    </EventsWrapper>
  );
};

export default Events;
