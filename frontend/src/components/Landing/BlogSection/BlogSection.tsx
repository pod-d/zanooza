import Button from "components/Button/Button";
import { blogCardData } from "./BlogSectionData";
import BlogSectionCard from "./BlogSectionCard";
import {
  BlogSectionWrapper,
  BlogSectionTop,
  BlogSectionCards,
} from "./BlogSection.styled";

const BlogSection = () => {
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
        {blogCardData.map((data) => (
          <BlogSectionCard
            avatar={data.avatar}
            name={data.name}
            duration={data.duration}
            articleImage={data.articleImage}
            articleTitle={data.articleTitle}
          />
        ))}
      </BlogSectionCards>
    </BlogSectionWrapper>
  );
};

export default BlogSection;
