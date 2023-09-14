import React from "react";

interface EventCardProps {
  image: any;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  amount: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  eventName,
  eventDate,
  eventLocation,
  amount,
}) => {
  return (
    <div >
      <div className="shadow-md my-4 w-80 rounded relative p-4 overflow-hidden ">
        <img
          src={image}
          alt="event"
          className="w-full h-52 rounded object-cover"
        />
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <p className="font-bold mb-1">{eventName}</p>
          </div>
          <p className="font-bold text-sm text-secondary-200 mb-1">
            {eventDate}
          </p>
          <p className="text-xs font-light my-1">{eventLocation}</p>
        </div>
        <span className="text-sm text-[#32C687] bg-[#EEF8F1] my-1">
          {amount}
        </span>
        <div className="mt-4 ">
          <a href="_blank" className="text-secondary-200 text-xs">
            View events
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
