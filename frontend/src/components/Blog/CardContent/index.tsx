import React from 'react'
import { MainContainer, TopSection, TextSection, ImageSection, BottomSection, NextArticleSection, BigImage } from './styled'
import Blog1 from "../../../assets/Blog1.png";
import proPic from "../../../assets/Ellipse 4.png";
import Author from '../Main/Author';
import future from '../../../assets/future-tech.png'
import bigHand from '../../../assets/bigHand.png'
import finger from '../../../assets/finger.png'
import TextTemplate from './TextTemplate'
import mic from "../../../assets/Blog2.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { FiMail } from "react-icons/fi";

function CardContent() {

  const iconStyle = {
    color: "#A456D8",
    fontSize: "1.12em"
  };


  return (
    <MainContainer>
      <TopSection>
        <div className="w-1/2  ">
          <img src={Blog1} alt="guy with vr" className="w-full" />
        </div>
        <div className="w-1/2 bg-white rounded-r-lg relative ">
          <div className=" ml-6 absolute top-1/2 transform -translate-y-1/2 left-0  ">
            <span className="text-secondary-200 text-xs">SHIPS</span>
            <h1 className="text-6xl font-bold leading-tight mb-5 ">
              Gaming is the new future AR/VR
            </h1>
            <Author
              image={proPic}
              name="Suzan Adinoyi"
              timePosted="5 days ago"
            />
            <div className=" mt-5 mb-2 ">
              <span className="text-base font-book">Share this Story</span>
            </div>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedinIn style={iconStyle} />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookF style={iconStyle} />
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <FaTwitter style={iconStyle} />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram style={iconStyle} />
              </a>
              <a href="https://www.accounts.google.com/" target="_blank">
                <FiMail style={iconStyle} />
              </a>
              <a href="https://web.whatsapp.com/" target="_blank">
                <FaWhatsapp style={iconStyle} />
              </a>
            </div>
          </div>
        </div>
      </TopSection>
      <TextSection>
        <h2 className="text-3xl font-bold mb-5">
          What Is Augmented Reality Gaming?
        </h2>
        <div className="text-lg font-book ">
          <span className="block">What Is Augmented Reality Gaming?</span>
          <p>
            Augmented reality (AR) gaming is a relatively new form of gameplay
            that continues to advance with new features and technologies
            constantly being added and improved for a better gaming experience.
          </p>
          <p>
            AR gaming superimposes a gaming environment over whatever real
            environment you’re currently in. So if you’re walking in a park, you
            can use your mobile device with an AR game to overlay an engaging
            augmented reality environment that you can interact with and see on
            your mobile device.
          </p>
          <p>
            What’s exciting about AR gaming is that it uses your current
            environment and augments it with gameplay to create an immersive
            experience that far exceeds standard mobile gaming and doesn’t
            require the investment of virtual reality equipment.
          </p>
          <p>
            With AR, you don’t need any specialized equipment as you do with
            virtual reality gaming, and often you’re just playing mobile games
            on your iPhone, touchpad, or other mobile gaming devices. VR gaming
            has been around for decades but has never become a mainstream gaming
            option because of the expensive dedicated equipment and limited
            gaming options available.
          </p>
        </div>
      </TextSection>
      <BigImage>
        <div className=" border-2  rounded-lg m-auto my-20 ">
          <img src={future} alt="future tech" className="w-full h-full" />
        </div>
      </BigImage>
      <TextSection>
        <TextTemplate />
      </TextSection>
      <ImageSection>
        <div className="flex rounded-lg m-auto my-20 gap-14">
          <img src={bigHand} alt="bigHand" />
          <img src={finger} alt="finger" />
        </div>
      </ImageSection>
      <TextSection>
        <TextTemplate />
      </TextSection>
      <BottomSection>
        <div className="flex justify-between">
          <div className="flex gap-5 justify-center items-center ">
            <div className="tag-body ">
              <span className=" tag-content">Article</span>
            </div>
            <div className="tag-body">
              <span className="tag-content">Article</span>
            </div>
            <div className="tag-body">
              <span className="tag-content">Article</span>
            </div>
            <div className="tag-body">
              <span className="tag-content">Article</span>
            </div>
            <div className="tag-body">
              <span className="tag-content">Article</span>
            </div>
            <div className="tag-body">
              <span className="tag-content">Article</span>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="block ">Share this Story</span>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedinIn style={iconStyle} />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookF style={iconStyle} />
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <FaTwitter style={iconStyle} />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram style={iconStyle} />
              </a>
              <a href="https://www.accounts.google.com/" target="_blank">
                <FiMail style={iconStyle} />
              </a>
              <a href="https://web.whatsapp.com/" target="_blank">
                <FaWhatsapp style={iconStyle} />
              </a>
            </div>
          </div>
        </div>
      </BottomSection>
      <NextArticleSection>
        <div className="h-full flex items-center">
          <h3 className="text-2xl font-bold mb-5 mx-auto">Read Next Article</h3>
        </div>

        <div className="shadow-lg rounded-lg p-4 overflow-hidden mb-5 w-3/5 m-auto">
          <div className=" flex">
            <img src={proPic} alt="profile" />
            <div className=" ml-5 ">
              <span className="text-base">Joe Gunner</span>
              <span className="block text-sm text-[#FF4680] font-normal">
                10 mins ago
              </span>
            </div>
          </div>{" "}
          <img src={mic} alt="background" className="w-full my-4" />
          <div className="tag-body">
            <span className="tag-content capitalize">Podcast</span>
          </div>
          <p className="font-bold text-3xl mt-2 leading-8">
            What is the future of Gaming in the World?
          </p>
        </div>
      </NextArticleSection>
    </MainContainer>
  );
}

export default CardContent