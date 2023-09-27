import React from 'react'
import { MainContainer, TopSection, BottomSection } from './styled'
import Button from 'components/Button/Button';
import MerchCards from './MerchCards';
import TopSectionData from './TopSectionData';
import BottomSectionData from './BottomSectionData';

function Shop() {
  return (
    <MainContainer>
      <div className="my-5 m-auto ">
        <h1 className="text-5xl m-auto text-center">
          Purchase amazing <span className="font-bold">Merch & Items</span>
        </h1>
      </div>
      <div className=" w-1/2 m-auto">
        <p className="text-center ">
          Here are some upcoming events and tournaments just for you 🎉
        </p>
      </div>
      <TopSection>
        <div className="grid grid-cols-3">
          {TopSectionData.map((data, index) => (
            <MerchCards
              key={index}
              image={data.image}
              tagGender={data.tagGender}
              tagItem={data.tagItem}
              productName={data.productName}
              productDescription={data.productDescription}
              amount={data.amount}
            />
          ))}
        </div>
      </TopSection>
      <BottomSection>
        <div className="flex items-center gap-5">
          <h3 className="text-4xl font-bold">
            Choose your <span className="text-[#FF4680]">preference</span>, I
            want to
          </h3>
          <div className="flex justify-evenly items-center h-16 w-60 bg-secondary-100 border-2 border-secondary-200 rounded-xl">
            <span className="bg-primary rounded-xl p-3 text-white">Shop</span>
            <span className="text-secondary-200">Rent</span>
          </div>
        </div>
        <div className=" my-8">
          <input
            type="text"
            name="search-event"
            id="search-event"
            placeholder="Search for items"
            style={{
              backgroundColor: "#F4F4F4",
              width: "35%",
              minHeight: "2em",
              padding: "0.9em",
              borderRadius: "12px",
              fontSize: "16px",
            }}
          />
          <Button
            name={"Search"}
            color={"var(--primary-colors-purple-purple-500, #A456D8)"}
            style={{
              width: "7.5rem",
              height: "2.8rem",
              fontSize: "16px",
              marginLeft: "15px",
            }}
          />
        </div>
        <div
          className="grid grid-cols-3"
          style={{
            height: "36.75rem",
            overflowY: "scroll",
            border: " 1px solid #ccc",
            padding: "16px"
          }}
        >
          {BottomSectionData.map((data, index) => (
            <MerchCards
              key={index}
              image={data.image}
              tagGender={data.tagGender}
              tagItem={data.tagItem}
              productName={data.productName}
              productDescription={data.productDescription}
              amount={data.amount}
            />
          ))}
        </div>
      </BottomSection>
      <div className=" mb-4 p-4 flex justify-center text-sm gap-2">
        <span>Page</span>
        {"  "}
        <select name="counter" id="counter" className="border-2 rounded w-12">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>{" "}
        of 10
      </div>
    </MainContainer>
  );
}

export default Shop