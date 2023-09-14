import Button from "components/Button/Button";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import {
  Buttons,
  GameProductCardWrapper,
  ProductImageWrapper,
  ProductTitle,
  SectionTitle,
} from "./GameProducts.styled";

export interface GameProductCardProps {
  title?: string;
  content?: string;
  $bgImg?: string | null;
  $color?: string;
  $bgColor?: string;
  index?: number;
  currentIndex?: number;
  handleClickCard?: () => void;
}

const GameProductCard: React.FC<GameProductCardProps> = ({
  title,
  content,
  $bgImg,
  $color,
  $bgColor,
  handleClickCard,
  index,
  currentIndex,
}) => {
  return (
    <GameProductCardWrapper $bgColor={$bgColor} onClick={handleClickCard}>
      <SectionTitle>
        {index === currentIndex && "OUR GAME PRODUCT"}
      </SectionTitle>
      <ProductImageWrapper $bgImg={$bgImg}></ProductImageWrapper>
      <div className="card-details">
        <ProductTitle $color={$color}>{title}</ProductTitle>
        <p>{content}</p>
        <Buttons>
          <Button
            icon={<AiFillAndroid />}
            name="Google Play"
            color="#fff"
            style={{ color: "#121212" }}
          />
          <Button
            icon={<AiFillApple />}
            name="Apple iOS"
            color="#fff"
            style={{ color: "#121212" }}
          />
        </Buttons>
      </div>
    </GameProductCardWrapper>
  );
};

export default GameProductCard;
