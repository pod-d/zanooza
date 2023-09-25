import React from "react";
import { EventContainer, FirstCardContainer, SecondContainer } from "./styled";
import Button from "components/Button/Button";
import EventCard from "./EventCard";
import { eventCardData } from "./EventCardData";
import BiggerCards from "./BiggerCards";
import BiggerCardsData from "./BiggerCardsData";

function Event() {
  return (
    <EventContainer>
      <div className="mt-5 h-32 w-1/2 m-auto">
        <h1 className="text-5xl m-auto text-center">
          Find your Next <span className="font-bold">Event or Tournament</span>
        </h1>
      </div>
      <div className=" w-1/2 m-auto">
        <p className="text-center ">
          Here are some upcoming events and tournaments just for you 🎉
        </p>
      </div>
      <FirstCardContainer>
        {BiggerCardsData.map((data, index) => (
          <BiggerCards
            key={index}
            image={data.image}
            eventName={data.eventName}
            eventDate={data.eventDate}
            eventLocation={data.eventLocation}
            amount={data.amount}
            organizers={data.organizers}
          />
        ))}
      </FirstCardContainer>
      <SecondContainer>
        <h2 className="text-5xl">
          All our <span className="text-[#FF4680]">events</span> are made just
          for <span className="text-primary">you</span>.
        </h2>
        <div className=" my-5">
          <input
            type="text"
            name="search-event"
            id="search-event"
            placeholder="Search all events and tournaments"
            style={{
              backgroundColor: "#F4F4F4",
              width: "48%",
              minHeight: "2em",
              padding: "0.9em",
              borderRadius: "12px",
              fontSize: "16px",
            }}
          />
          <Button
            name={"Search"}
            color={"var(--primary-colors-purple-purple-500, #A456D8)"}
            style={{
              width: "7.5rem",
              height: "2.8rem",
              fontSize: "16px",
              marginLeft: "15px",
            }}
          />
        </div>
        <div
          className="grid grid-cols-3"
          style={{
            height: "36.75rem",
            overflowY: "scroll",
            border: " 1px solid #ccc",
            paddingLeft: "2rem",
          }}
        >
          {eventCardData.map((data, index) => (
            <EventCard
              key={index}
              image={data.image}
              eventName={data.eventName}
              eventDate={data.eventDate}
              eventLocation={data.eventLocation}
              amount={data.amount}
            />
          ))}
        </div>

        <div className=" my-4 p-4 flex justify-center text-sm gap-2">
          <span>Page</span>
         
          <select name="counter" id="counter" className="border-2 rounded w-12">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          of 10
        </div>
      </SecondContainer>
    </EventContainer>
  );
}

export default Event;
