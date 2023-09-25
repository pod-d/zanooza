import avatar from "../../../assets/blog-avatar.png";
import image1 from "../../../assets/blog-image1.png";
import image2 from "../../../assets/blog-image2.png";
import image3 from "../../../assets/blog-image3.png";

export interface BlogCardProps {
  avatar: string;
  name: string;
  duration: string;
  articleImage: string;
  articleTitle: string;
  index?: number;
  currentIndex?: number;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
}

export interface BlogCardStyledProps {
  $avatar?: string;
  $articleImage?: string;
}

export const blogCardData: BlogCardProps[] = [
  {
    avatar: avatar,
    name: "Justin Clifford",
    duration: "2 months ago",
    articleImage: image1,
    articleTitle: "What is the future of Gaming in the World?",
  },
  {
    avatar: avatar,
    name: "Justin Clifford",
    duration: "2 months ago",
    articleImage: image2,
    articleTitle: "What is the future of Gaming in the World?",
  },
  {
    avatar: avatar,
    name: "Justin Clifford",
    duration: "2 months ago",
    articleImage: image3,
    articleTitle: "What is the future of Gaming in the World?",
  },
];
