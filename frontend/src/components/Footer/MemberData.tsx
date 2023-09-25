import { ReactNode } from "react";

export interface MemberCardProps {
  details: string;
  stars: ReactNode;
}
export const memberData: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .",
];

export const star: ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12.003 17.2649L16.1545 19.774C16.9148 20.2338 17.8451 19.5541 17.645 18.6944L16.5447 13.9761L20.216 10.7972C20.8862 10.2174 20.5261 9.11779 19.6458 9.04782L14.814 8.63797L12.9234 4.17955C12.5832 3.36984 11.4228 3.36984 11.0827 4.17955L9.19204 8.62797L4.36033 9.03782C3.48001 9.1078 3.11989 10.2074 3.79012 10.7872L7.46143 13.9661L6.36104 18.6844C6.16097 19.5441 7.0913 20.2238 7.85157 19.764L12.003 17.2649Z"
      fill="#FFC703"
    />
  </svg>
);
