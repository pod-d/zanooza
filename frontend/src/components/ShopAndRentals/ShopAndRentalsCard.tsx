import Button from "components/Button/Button";
import React, { ReactNode } from "react";
import { Card } from "./ShopAndRentals.styled";

interface SnRCardProps {
  cardImg: string;
  tag1: string;
  tag2: string;
  productName: string;
  productDesc: string;
  price: string;
  btnText: string;
  btnBg: string;
  btnIcon: ReactNode;
}

const ShopAndRentalsCard: React.FC<SnRCardProps> = ({
  cardImg,
  tag1,
  tag2,
  productName,
  productDesc,
  price,
  btnText,
  btnBg,
  btnIcon,
}) => {
  return (
    <>
      <Card>
        <img src={cardImg} alt="product image" />
        <div className="tagwrapper">
          <div className="snr-tag">{tag1}</div>
          <div className="snr-tag">{tag2}</div>
        </div>
        <h5 className="product-name">{productName}</h5>
        <p className="product-desc">{productDesc}</p>
        <div className="price-and-cart">
          <span>{price}</span>
          <Button
            icon={btnIcon}
            name={btnText}
            color={btnBg}
            style={{
              color: "#A456D8",
              display: "flex",
              alignItems: "center",
              flexDirection: "row-reverse",
              gap: ".5rem",
            }}
          />
        </div>
      </Card>
      <div></div>
    </>
  );
};

export default ShopAndRentalsCard;
