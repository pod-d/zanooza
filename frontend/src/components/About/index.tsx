import React from "react";
import {
  AboutContainer,
  FrameTwo,
  OurStory,
  LastFrame,
  Sections
} from "./Styled";
import project1 from '../../assets/explore1.png'
import project2 from '../../assets/explore2.png';
import project3 from '../../assets/explore3.png';
import project4 from '../../assets/explore4.png';
import zannoza from '../../assets/Zannoza.jpeg';

import OurServices from "./OurServices";
import OurServicesData  from "./OurServicesData";
  
import Founders from "./Founders";
import FoundersData from "./FoundersData";
  
function SectionOne() {
  return (
    <AboutContainer>
      <div className="flex justify-between p-20 mb-20 bg-whitesmoke ">
        <div className="w-3/6 ml-8 p-2 text-6xl ">
          We leverage the connecting power of{" "}
          <span className="font-bold block animate-typing text-primary">
            interactive, social
          </span>
          and <span className="font-bold animate-typing">competitive</span>{" "}
          games to create
          <span className="font-bold block animate-typing text-primary">
            unforgettable
          </span>{" "}
          <span className="font-bold ">experiences</span>
        </div>
        <div className="bg-white p-4 h-96 w-96 mr-10 rounded-xl ">
          <img src={zannoza} alt="zannoza" className="my-40 animate-bounce" />
        </div>
      </div>
      <FrameTwo>
        <div className="flex justify-evenly h-64 w-10/12 m-auto bg-secondary-100 mt-4 mb-4 rounded-xl space-x-24">
          <div className="p-12 w-1/2 ">
            <span className="text-3xl text-secondary-200 font-bold">
              Our Mission
            </span>
            <p className="mt-6 text-sm  w-96 leading-relaxed">
              Bring employees, customers, or guests together with our
              interactive game sharing experience, bringing teams closer,
              improving work culture or product knowledge
            </p>
          </div>
          <div className="p-12 w-1/2 ">
            <span className="text-3xl text-secondary-200 font-bold">
              Our Vision
            </span>
            <p className="mt-6 text-sm w-96 leading-relaxed">
              Bring employees, customers, or guests together with our
              interactive game sharing experience, bringing teams.
            </p>
          </div>
        </div>
      </FrameTwo>
      <Sections>
        <div className="h-full flex items-center">
          <h3 className="text-3xl font-bold mb-5 mx-auto">Our Services</h3>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {OurServicesData.map((data, index) => (
            <OurServices key={index} heading={data.heading} body={data.body} />
          ))}
        </div>
      </Sections>
      <Sections>
        <div className="flex gap-5 mb-5">
          <div className="small-blanks "></div>
          <div className="big-blanks"></div>
        </div>
        <div className="flex flex-row-reverse gap-5 mb-5">
          <div className="small-blanks "></div>
          <div className="big-blanks"></div>
        </div>
        <div className="flex gap-5 ">
          <div className="small-blanks "></div>
          <div className="big-blanks"></div>
        </div>
      </Sections>
      <OurStory>
        <div className="h-full flex items-center">
          <h3 className="text-3xl font-bold mb-5 mx-auto">Our Story</h3>
        </div>
        <div className=" p-2 text-6xl m-auto leading-snug">
          We leverage the connecting power of{" "}
          <span className="font-bold ">interactive, social</span> and{" "}
          <span className="font-bold ">competitive</span> games to create{" "}
          <span className="font-bold ">unforgettable experiences.</span> We
          leverage the connecting power of{" "}
          <span className="font-bold ">interactive, social</span> and{" "}
          <span className="font-bold ">competitive</span>
          games to create{" "}
          <span className="font-bold ">unforgettable experiences.</span> We
          leverage the connecting power of{" "}
          <span className="font-bold ">interactive, social</span> and{" "}
          <span className="font-bold ">competitive</span> games.
        </div>
      </OurStory>
      <Sections>
        <div className="h-full flex items-center">
          <h3 className="text-3xl font-bold mb-5 mx-auto">Meet the founders</h3>
        </div>
        <div className="flex justify-evenly ">
          {FoundersData.map((data, index) => (
            <Founders
              key={index}
              name={data.name}
              title={data.title}
              image={data.image}
              linkedinUrl={data.linkedinUrl}
            />
          ))}
        </div>
      </Sections>
      <Sections>
        <div className="flex justify-between items-center">
          <div className="flex flex-col" id="left">
            <div className="font-bold text-5xl w-96 mb-4">
              Projects we’ve worked on and Brands we’ve worked with
            </div>
            <div className=" w-96 leading-7 text-md tracking-tighter">
              We provide entertainment services to corporate organizations,
              resident associations, churches, schools, events, clubs, alumni
              associations, and individuals, creating unforgettable fun
              experiences! We are committed to producing engaging, educational,
              and interactive content & events that create connection, promote
              games, and create community.
            </div>
          </div>
          <div className=" w-auto " id="right">
            <div className="flex gap-5 mb-5">
              <div className="projects">
                <img
                  src={project1}
                  alt="firstProject"
                  className="object-cover"
                />
              </div>
              <div className="projects">
                <img
                  src={project2}
                  alt="secondProject"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex gap-5 mt-5">
              <div className="projects">
                <img
                  src={project3}
                  alt="thirdProject"
                  className="object-cover"
                />
              </div>
              <div className="projects">
                <img
                  src={project4}
                  alt="fourthProject"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Sections>
      <LastFrame>
        <div className="flex justify-between p-20 mb-20 ">
          <div className="w-3/6 ml-8 p-2 text-6xl ">
            We leverage the connecting power of{" "}
            <span className="font-bold block animate-typing">
              interactive, social
            </span>
            and <span className="font-bold animate-typing">competitive</span>{" "}
            games to create
            <span className="font-bold block animate-typing">
              unforgettable
            </span>{" "}
            <span className="font-bold ">experiences</span>
          </div>
          <div className="bg-whitesmoke p-4 h-96 w-96 mr-10 rounded-xl">
            <img src={zannoza} alt="zannoza" className="my-32" />
          </div>{" "}
        </div>
      </LastFrame>
    </AboutContainer>
  );
}

export default SectionOne;
