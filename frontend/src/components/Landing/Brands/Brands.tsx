import { useEffect, useState } from "react";
import {
  BrandsBody,
  BrandsLeft,
  BrandsList,
  BrandsRight,
  BrandsWrapper,
} from "./Brands.styled";
import { brandsList, brandsPics } from "./BrandsData";

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const goToNextBrand = () => {
      if (currentIndex === brandsList.length - 1) {
        return;
      } else setCurrentIndex(currentIndex + 1);
    };
    setTimeout(() => {
      goToNextBrand();
    }, 3000);
  }, [currentIndex]);

  return (
    <BrandsWrapper>
      <h1>Our Brands and Initiatives </h1>
      <BrandsBody>
        <BrandsLeft $bgImg={brandsPics[currentIndex]}>
          <div className="behind"></div>
          <div className="brandImage"></div>
        </BrandsLeft>
        <BrandsRight>
          <BrandsList>
            {brandsList.map((item, index) => (
              <li
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={index === currentIndex ? "left-border" : ""}
              >
                {item}
              </li>
            ))}
          </BrandsList>
        </BrandsRight>
      </BrandsBody>
    </BrandsWrapper>
  );
};

export default Brands;
