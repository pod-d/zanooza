import React from "react";

interface BiggerCardsProps {
  image: any;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  amount: string;
  organizers: string;
}

const BiggerCards: React.FC<BiggerCardsProps> = ({
  image,
  eventDate,
  eventLocation,
  eventName,
  amount,
  organizers,
}) => {
  return (
    <div className="shadow-md  w-2/5 relative p-4 overflow-hidden hover:border-orange-3 00 border-b-8 rounded-lg border-transparent transition-transform duration-300 ease-in transform hover:scale-105">
      <img src={image} alt="crowd" className="w-full  object-cover" />
      <div className="mt-2">
        <div className="flex justify-between items-center">
          <p className="font-bold">{eventName}</p>
          <span className="text-lg text-[#32C687] bg-[#EEF8F1] ">{amount}</span>
        </div>
        <p className="font-bold text-sm text-secondary-200">{eventDate}</p>
        <p className="text-xs font-light">{eventLocation}</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs">{organizers}</p>
        <a href="_blank" className="text-secondary-200 text-xs">
          View events
        </a>
      </div>
    </div>
  );
};

export default BiggerCards;
