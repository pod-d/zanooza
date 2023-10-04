import React from 'react'

interface BigBlogCardsProp {
  cardImage: any;
  authorImage: any;
  authorName: string;
  timePosted: string;
  typeOfContent: string;
  titleOfContent: string;
  onClick: () => void;
}


const BigBlogCards: React.FC<BigBlogCardsProp> = ({
  cardImage,
  titleOfContent,
  authorImage,
  authorName,
  timePosted,
  typeOfContent,
  onClick
}) => {
  return (
    <div className='flex justify-center cursor-pointer' onClick={onClick}>
      <div className="w-1/2 ">
        <img src={cardImage} alt="guy with vr" className="w-full" />
      </div>
      <div className="w-1/2 bg-white rounded-r-lg relative ">
        <div className=" ml-6 absolute top-1/2 transform -translate-y-1/2 left-0">
          <span className="text-secondary-200 text-xs">{typeOfContent}</span>
          <h1 className="text-6xl font-bold my-5 leading-tight  ">
            {titleOfContent}
          </h1>
          <div className=" flex">
            <img src={authorImage} alt="profile" />
            <div className=" ml-5 ">
              <span className="text-base">{authorName}</span>
              <span className="block text-sm text-[#FF4680] font-normal">
                {timePosted}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBlogCards