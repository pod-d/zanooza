import Button from "components/Button/Button";
import { blogCardData } from "./BlogSectionData";
import BlogSectionCard from "./BlogSectionCard";
import {
  BlogSectionWrapper,
  BlogSectionTop,
  BlogSectionCards,
} from "./BlogSection.styled";
import { useState } from "react";

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  return (
    <BlogSectionWrapper>
      <BlogSectionTop>
        <h1>
          Blog 🎓
          <span>What’s New?</span>
        </h1>
        <Button
          name="Read all articles"
          color="#fff"
          style={{ color: "#A456D8" }}
        />
      </BlogSectionTop>
      <BlogSectionCards>
        {blogCardData.map((data, index) => (
          <BlogSectionCard
            key={index}
            avatar={data.avatar}
            name={data.name}
            duration={data.duration}
            articleImage={data.articleImage}
            articleTitle={data.articleTitle}
            index={index}
            currentIndex={currentIndex}
            handleMouseEnter={() => setCurrentIndex(index)}
            handleMouseLeave={() => setCurrentIndex(-1)}
          />
        ))}
      </BlogSectionCards>
    </BlogSectionWrapper>
  );
};

export default BlogSection;
