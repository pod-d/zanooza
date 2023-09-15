import React from 'react'

interface AuthorProps{
    image: any;
    name: string;
    timePosted: string;
}

const Author:React.FC<AuthorProps> =({image, name, timePosted})=> {
  return (
    <div className=" flex">
      <img src={image} alt="profile" />
      <div className=" ml-5 ">
        <span className="text-base">{name}</span>
        <span className="block text-sm text-[#FF4680] font-normal">
          {timePosted}
        </span>
      </div>
    </div>
  );
}

export default Author