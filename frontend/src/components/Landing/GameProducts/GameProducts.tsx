import { useState } from "react";
import GameProductCard from "./GameProductCard";
import { GameProductsWrapper } from "./GameProducts.styled";
import { gameProductsData } from "./GameProductsData";

const GameProducts = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  return (
    <GameProductsWrapper>
      {gameProductsData.map((data, index) => (
        <GameProductCard
          key={index}
          title={data.title}
          content={data.content}
          $bgColor={data.$bgColor}
          $bgImg={data.$bgImg}
          $color={data.$color}
          handleClickCard={() => setCurrentIndex(index)}
          index={index}
          currentIndex={currentIndex}
        />
      ))}
    </GameProductsWrapper>
  );
};

export default GameProducts;
