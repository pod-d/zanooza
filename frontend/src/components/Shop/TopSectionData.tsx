import merch1 from "../../assets/Merch1.png";
import merch2 from "../../assets/Merch2.png";
import merch3 from "../../assets/Merch3.png";

// This TopSection Data SHOULD only take 3 datas due to the design pattern

const TopSectionData = [
  {
    image: merch1,
    tagGender: "women",
    tagItem: "shirts",
    productName: "Red Potus",
    productDescription: " Womens only wear for sports and other",
    amount: "$55.00",
  },
  {
    image: merch2,
    tagGender: "men",
    tagItem: "shirts",
    productName: "Black Potus",
    productDescription: " Mens only wear for sports and other",
    amount: "$35.00",
  },
  {
    image: merch3,
    tagGender: "Any",
    tagItem: "Board",
    productName: "Dart Boards",
    productDescription: " Mens only wear for sports and other",
    amount: "$20.00",
  },
];

export default TopSectionData;
