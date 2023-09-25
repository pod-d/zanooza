import studyImg from "../../assets/study.png";

export const defaultValues: string[] = [
  "Budget",
  "Headcount",
  "Format",
  "Activity type",
  "Find matches",
];

export interface FirstCardProps {
  title: string;
  desc: string;
  innerBg: string;
  mainBg: string;
}

export const firstCardData: FirstCardProps[] = [
  {
    title: "Women’s History Month",
    desc: "Celebrate the incredible women on your team this March with experiences that are created and led by women entrepreneurs and educators.",
    innerBg: "#FCF3EC",
    mainBg: "#F29C4A",
  },
  {
    title: "Earth Day Celebration",
    desc: "Join us in April to celebrate Earth Day. Explore sustainable practices and environmental initiatives through activities led by eco-conscious entrepreneurs and educators.",
    innerBg: "#BFECD6",
    mainBg: "#03BA6C",
  },
  {
    title: "Mental Health Awareness Week",
    desc: "Raise awareness about mental health and well-being this May. Engage in activities that promote mental wellness, guided by mental health advocates and educators.",
    innerBg: "#DFC6F2",
    mainBg: "#A456D8",
  },
  {
    title: "Tech Innovation Symposium",
    desc: "Dive into the latest tech trends and innovations. Attend our symposium in June, featuring tech industry experts and thought leaders.",
    innerBg: "#FFF7DC",
    mainBg: "#FFEDB1",
  },
  {
    title: "Global Wellness Retreat",
    desc: "Elevate your well-being with our global wellness retreat in October. Discover mindfulness, self-care, and holistic practices guided by wellness gurus and educators.",
    innerBg: "#BFE6FB",
    mainBg: "#05A4F1",
  },
];

export const collectionsData: string[] = [
  "Bank Heist",
  "Mobile Escape Room",
  "Murder Mystery Party",
  "Standard Team Building",
  "Premium Team Building",
  "Team Olympics",
  "Adventure Quest",
  "Corporate Gaming League",
  "Employee Onboarding Pack",
  "The Big Picture",
  "Conference Ice Breakers",
  "Training Games",
  "Knowledge Bank",
  "Diversity, Equity & Inclusion",
  "Safety First ",
  "Thank You Experience",
  " Games Night ",
  "Party Fun Experience",
  "Mix and Match Experience ",
  "Add On Experiences",
  "The Dash-Hunt : The (Name of Company) Edition",
  "The Pub Explorer & Lounge Experience",
];

export interface SecondCardProps {
  title: string;
  desc: string;
  cost: string;
  noOfPeople: string;
  duration: string;
  bgImg: string;
}

export const secondCardData: SecondCardProps[] = [
  {
    title: "SAY WHOT",
    desc: "An exciting mash-up between an online escape room and a scavenger...",
    cost: "₦5,000",
    noOfPeople: "Max 10 people",
    duration: "60-120 minutes",
    bgImg: studyImg,
  },
  {
    title: "SAY WHOT",
    desc: "An exciting mash-up between an online escape room and a scavenger...",
    cost: "₦5,000",
    noOfPeople: "Max 10 people",
    duration: "60-120 minutes",
    bgImg: studyImg,
  },
  {
    title: "SAY WHOT",
    desc: "An exciting mash-up between an online escape room and a scavenger...",
    cost: "₦5,000",
    noOfPeople: "Max 10 people",
    duration: "60-120 minutes",
    bgImg: studyImg,
  },
  {
    title: "SAY WHOT",
    desc: "An exciting mash-up between an online escape room and a scavenger...",
    cost: "₦5,000",
    noOfPeople: "Max 10 people",
    duration: "60-120 minutes",
    bgImg: studyImg,
  },
  {
    title: "SAY WHOT",
    desc: "An exciting mash-up between an online escape room and a scavenger...",
    cost: "₦5,000",
    noOfPeople: "Max 10 people",
    duration: "60-120 minutes",
    bgImg: studyImg,
  },
  {
    title: "SAY WHOT",
    desc: "An exciting mash-up between an online escape room and a scavenger...",
    cost: "₦5,000",
    noOfPeople: "Max 10 people",
    duration: "60-120 minutes",
    bgImg: studyImg,
  },
  {
    title: "SAY WHOT",
    desc: "An exciting mash-up between an online escape room and a scavenger...",
    cost: "₦5,000",
    noOfPeople: "Max 10 people",
    duration: "60-120 minutes",
    bgImg: studyImg,
  },
  {
    title: "SAY WHOT",
    desc: "An exciting mash-up between an online escape room and a scavenger...",
    cost: "₦5,000",
    noOfPeople: "Max 10 people",
    duration: "60-120 minutes",
    bgImg: studyImg,
  },
  {
    title: "SAY WHOT",
    desc: "An exciting mash-up between an online escape room and a scavenger...",
    cost: "₦5,000",
    noOfPeople: "Max 10 people",
    duration: "60-120 minutes",
    bgImg: studyImg,
  },
];
