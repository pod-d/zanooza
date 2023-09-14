import React from "react";
import Button from "components/Button/Button";

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
        <div className="shadow-md w-96  p-4 my-4 ">
          <img src={image} alt="merch" className="w-full"/>
          <div className=" flex my-2 gap-5">
            <div className="tag-body">
              <span className="tag-content">{tagGender}</span>
            </div>
            <div className="tag-body">
              <span className="tag-content">{tagItem}</span>
            </div>
          </div>
          <div>
            <p className="capitalize font-black text-xl">{productName}</p>
            <p className="text-xs text-[#A0A0A0]">{productDescription}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-secondary-200 font-bold ">{amount}</span>
            <Button
              name={"Add to cart"}
              color={"#F3EBFA"}
              style={{
                width: "7.5rem",
                height: "1.8rem",
                fontSize: "14px",
                color: "#A456D8",
                paddingBottom: "28px",
              }}
            />
          </div>
        </div>
    
    );
};

export default MerchCards;
