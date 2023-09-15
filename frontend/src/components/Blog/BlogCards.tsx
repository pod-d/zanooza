import React from "react";

interface BlogCardsProps {
  cardImage: any;
  authorImage: any;
  authorName: string;
  timePosted: string;
  typeOfContent: string;
  titleOfContent: string;
}

const BlogCards: React.FC<BlogCardsProps> = ({
  cardImage,
  authorImage,
  authorName,
  timePosted,
  typeOfContent,
  titleOfContent,
}) => {
  return (
    <div className="shadow-lg rounded-lg p-4 overflow-hidden mb-5">
      <div className=" flex">
        <img src={authorImage} alt="profile" />
        <div className=" ml-5 ">
          <span className="text-base">{authorName}</span>
          <span className="block text-sm text-[#FF4680] font-normal">
            {timePosted}
          </span>
        </div>
      </div>{" "}
      <img src={cardImage} alt="background" className="w-full my-4" />
      <div className="tag-body">
        <span className="tag-content capitalize">{typeOfContent}</span>
      </div>
      <p className="font-bold text-lg mt-2 leading-8">{titleOfContent}</p>
    </div>
  );
};

export default BlogCards;
