import React from 'react'
import Button from "components/Button/Button";
import {ShopContainer, ShopCardSection1, ShopWrapper, FooterPage1} from './Shop.styled'
import { images, shopData, shopColors } from "./ShopData";


const Shop = () => {
  return (
    <ShopContainer>
      <div className='shopContent'>
        <div className='merchItem'>
         <h1>Purchase amazing <span>Merch & Items</span></h1>
        </div>
        <div>
            <p>Here are some upcoming events and tournaments just for you 🎉</p>
        </div>
      </div>
      <ShopCardSection1>
     {shopData.map((data, index) => (
      <ShopWrapper
        key={index}
        style={{ backgroundColor: shopColors[index].cardBg }}
      >         
        <img src={images[index]} alt="" />
      
        {/* { (
          <Button
            name={"Article"}
            color={shopColors[index].btnBg}
            style={{
              width: "5.625rem",
              margin: "auto",
              fontSize: "0.5rem",
              padding: "5px",
            }}
          />
        )} */}
        <div className='shopTop'>
          <div className='shopbtn'>
            <button>men</button>
            <button>sneakers</button>
          </div>

          <div className='shopContent'>
            <h4>Product Name</h4>
            <p>Mens only wear for sports and other</p>
          </div>

        </div>

        <div className='shopMoney'>
            <h4>$20.00</h4>
            <button>Add to cart</button>
        </div>
       

        

        
      
      </ShopWrapper>
    ))}
    </ShopCardSection1>
    </ShopContainer>
  )
}

export default Shop
