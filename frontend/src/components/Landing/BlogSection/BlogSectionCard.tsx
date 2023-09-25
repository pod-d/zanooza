import Button from "components/Button/Button";
import { BlogCardProps } from "./BlogSectionData";
import {
  AticleBottom,
  AticleImageWrapper,
  AvatarWrapper,
  BlogCardWrapper,
  BottomLine,
  CardTop,
  NameDuration,
} from "./BlogSection.styled";

const BlogSectionCard: React.FC<BlogCardProps> = ({
  avatar,
  articleImage,
  articleTitle,
  duration,
  name,
  index,
  currentIndex,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <BlogCardWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardTop>
        <AvatarWrapper $avatar={avatar}></AvatarWrapper>
        <NameDuration>
          <span className="name">{name}</span>
          <span className="duration">{duration}</span>
        </NameDuration>
      </CardTop>
      <AticleImageWrapper $articleImage={articleImage}></AticleImageWrapper>
      <AticleBottom>
        <Button name="Article" color="#FCF3EC" style={{ color: "#f29c4a" }} />
        <p>{articleTitle}</p>
      </AticleBottom>
      {index === currentIndex && <BottomLine></BottomLine>}
    </BlogCardWrapper>
  );
};

export default BlogSectionCard;
