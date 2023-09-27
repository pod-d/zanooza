import React,{useState}  from "react";
import { MainContainer, TopSection, BottomSection } from "./styled";
import BlogCards from "./SmallCards";
import SmallCardData from "./SmallBlogData";
import CardContent from "../CardContent";
import BigBlogCards from "./BigBlogCards";
import {BigCardData} from "./BigCardData";

function Blog() {

  const [showContent, setShowContent] = useState(false)



  return (
    <>
      {showContent ? (
        <CardContent />
      ) : (
        <MainContainer>
          <TopSection>
            {BigCardData.map((data, index) => (
              <BigBlogCards
                key={index}
                cardImage={data.cardImage}
                authorImage={data.authorImage}
                titleOfContent={data.titleOfContent}
                timePosted={data.timePosted}
                authorName={data.authorName}
                typeOfContent={data.typeOfContent}
                onClick={() => setShowContent(true)}
              />
            ))}
          </TopSection>
          <BottomSection>
            <div className=" p-4 grid grid-cols-3 gap-10">
              {SmallCardData.map((data, index) => (
                <BlogCards
                  key={index}
                  cardImage={data.cardImage}
                  authorImage={data.authorImage}
                  authorName={data.authorName}
                  timePosted={data.timePosted}
                  typeOfContent={data.typeOfContent}
                  titleOfContent={data.titleOfContent}
                  onClick={() => setShowContent(true)}
                />
              ))}
            </div>
          </BottomSection>
        </MainContainer>
      )}
    </>
  );
}

export default Blog;
