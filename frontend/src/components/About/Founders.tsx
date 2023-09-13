import React from 'react'
import LinkedinLogo from "../../assets/logos_linkedin-icon.svg";

interface FoundersProps{
    name: string;
    title: string;
    image: any;
    linkedinUrl: string;
}

const Founders: React.FC<FoundersProps> = ({
  name,
  title,
  image,
  linkedinUrl,
}) => {
  return (
    <div className=" founders-card">
      <div className="profile-card">
        <img src={image} alt="founder" />
      </div>
      <p className="text-base mb-1">{name}</p>
      <p className="text-xs mb-1">{title}</p>
      <a href={linkedinUrl} target="_blank" rel="noreferrer">
        <img src={LinkedinLogo} alt="linkedln profile" className="w-5" />
      </a>
    </div>
  );
};

export default Founders