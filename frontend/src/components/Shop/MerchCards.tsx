import React from "react";
import Button from "components/Button/Button";
import { BsCart2 } from "react-icons/bs";


interface MerchCardsProps {
  image: any;
  tagGender: string;
  tagItem: string;
  productName: string;
  productDescription: string;
  amount: string;
}

const MerchCards: React.FC<MerchCardsProps> = ({
  image,
  tagGender,
  tagItem,
  productName,
  productDescription,
  amount,
}) => {

    return (
      <div className="shadow-md w-96  p-4 my-4 group hover:border-[#FF69B4] border-b-8 rounded-lg border-transparent transition-transform duration-300 ease-in transform hover:scale-105 ">
        <img src={image} alt="merch" className="w-full" />
        <div className=" flex my-2 gap-5">
          <div className="tag-body">
            <span className="tag-content">{tagGender}</span>
          </div>
          <div className="tag-body">
            <span className="tag-content">{tagItem}</span>
          </div>
        </div>
        <div>
          <p className="capitalize font-medium text-xl">{productName}</p>
          <p className="text-xs text-[#A0A0A0]">{productDescription}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-secondary-200 font-bold text-xl ">
            {amount}
          </span>
          <Button
            icon={<BsCart2 />}
            name={"Add to cart"}
            color={"#F3EBFA"}
            style={{
              color: "#A456D8",
              display: "flex",
              alignItems: "center",
              flexDirection: "row-reverse",
              gap: ".3rem",
              width: "8.9rem",
              height: "2.4rem",
            }}
          />
        </div>
      </div>
    );
};

export default MerchCards;
