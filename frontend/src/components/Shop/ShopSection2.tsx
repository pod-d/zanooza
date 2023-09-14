import React from "react";
import Button from "components/Button/Button";
import {
  ShopContainer,
  ShopSectionDiv,
  ShopCardSection2,
  ShopWrapper,
  FooterPage1,
  MemberBox,
} from "./Shop.styled";
import { images, shopData, shopColors } from "./ShopCardData";
import { useLocation } from "react-router-dom";

const ShopSection2 = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <ShopContainer>
      <ShopSectionDiv>
        {currentPath !== "/" && (
          <>
            <div className="shopSectionContent">
              <div className="choose">
                <div className="chooseH1">
                  <h1>Choose your preference, I want to </h1>
                </div>

                <div className="shopRent">
                  <button className="shopPurple">shop</button>
                  <button>Rent</button>
                </div>
              </div>
            </div>

            <div className="btnPadding">
              <input type="text" placeholder="Search for items" />
              <button type="submit">Search</button>
            </div>
            <ShopCardSection2>
              {shopData.map((data, index) => (
                <ShopWrapper
                  key={index}
                  style={{ backgroundColor: shopColors[index].cardBg }}
                >
                  <img src={images[index]} alt="" />

                  <div className="shopTop">
                    <div className="shopbtn">
                      <button>men</button>
                      <button>sneakers</button>
                    </div>

                    <div className="shopContent">
                      <h4>Product Name</h4>
                      <p>Mens only wear for sports and other</p>
                    </div>
                  </div>

                  <div className="shopMoney">
                    <h4>$20.00</h4>
                    <button>Add to cart</button>
                  </div>
                </ShopWrapper>
              ))}
            </ShopCardSection2>
          </>
        )}
      </ShopSectionDiv>
    </ShopContainer>
  );
};

export default ShopSection2;
