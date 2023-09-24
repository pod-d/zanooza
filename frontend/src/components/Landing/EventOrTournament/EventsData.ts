import image1 from "../../../assets/Event1.png";
import image2 from "../../../assets/Event2.png";

export interface EventProps {
  image: string;
  eventName: string;
  eventDate: string;
  venue: string;
  organizer: string;
  gateFee: string;
  btnLabel: string;
  index?: number;
  currentIndex?: number;
  handleMouseEnter?:()=>void
  handleMouseLeave?:()=>void

}

export const eventsDetails: EventProps[] = [
  {
    image: image1,
    eventName: "Event Name",
    eventDate: "Wed, Feb 15, 8:00AM",
    venue: "Landmark Centre | Annex, LA",
    organizer: "Organizers Name",
    gateFee: "₦5,000",
    btnLabel: "View events",
  },
  {
    image: image2,
    eventName: "Event Name",
    eventDate: "Wed, Feb 15, 8:00AM",
    venue: "Landmark Centre | Annex, LA",
    organizer: "Organizers Name",
    gateFee: "₦5,000",
    btnLabel: "View events",
  },
];
