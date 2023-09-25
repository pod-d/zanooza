import React from "react";
import { MainContainer, TopSection, BottomSection } from "./styled";
import Blog1 from "../../../assets/Blog1.png";
import proPic from "../../../assets/Ellipse 4.png";
import Author from "./Author";
import BlogCards from "./BlogCards";
import BlogCardData from "./BlogCardsData";

function Blog() {
  return (
    <MainContainer>
      <TopSection>
        <div className="w-1/2 ">
          <img src={Blog1} alt="guy with vr" className="w-full" />
        </div>
        <div className="w-1/2 bg-white rounded-r-lg relative ">
          <div className=" ml-6 absolute top-1/2 transform -translate-y-1/2 left-0">
            <span className="text-secondary-200 text-xs">SHIPS</span>
            <h1 className="text-6xl font-bold my-5 leading-tight  ">
              Gaming is the new future AR/VR
            </h1>
            <Author
              image={proPic}
              name="Suzan Adinoyi"
              timePosted="5 days ago"
            />
          </div>
        </div>
      </TopSection>
      <BottomSection>
        <div className=" p-4 grid grid-cols-3 gap-10">
          {BlogCardData.map((data, index) => (
            <BlogCards
              key={index}
              cardImage={data.cardImage}
              authorImage={data.authorImage}
              authorName={data.authorName}
              timePosted={data.timePosted}
              typeOfContent={data.typeOfContent}
              titleOfContent={data.titleOfContent}
            />
          ))}
        </div>
      </BottomSection>
    </MainContainer>
  );
}

export default Blog;
