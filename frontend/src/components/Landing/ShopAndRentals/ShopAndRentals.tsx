import Button from "components/Button/Button";
import { GiShoppingCart } from "react-icons/gi";
import ShopAndRentalsCard from "./ShopAndRentalsCard";
import { SnRData } from "./ShopAndRentalsCardData";
import { BsCart2 } from "react-icons/bs";
import { CardsWrapper, SectionWrapper } from "./ShopAndRentals.styled";

const ShopAndRentals = () => {
  return (
    <SectionWrapper>
      <div className="snrtop">
        <h3>
          Shop and Rentals <GiShoppingCart className="carticon" />
        </h3>
        <Button
          name={"View all items"}
          color={"#fff"}
          style={{ color: "#A456D8" }}
        />
      </div>
      <div className="snr-categories">
        <span>Shop</span>
        <span>Rental</span>
      </div>
      <CardsWrapper>
        {SnRData.map((data, index) => (
          <ShopAndRentalsCard
            key={index}
            cardImg={data.image}
            tag1={data.tag1}
            tag2={data.tag2}
            productName={data.productName}
            productDesc={data.description}
            price={data.price}
            btnText={data.cartBtnText}
            btnBg={"#F3EBFA"}
            btnIcon={<BsCart2 />}
          />
        ))}
      </CardsWrapper>
    </SectionWrapper>
  );
};

export default ShopAndRentals;
