import React from 'react'
import Button from "components/Button/Button";
import { BlogSection, BlogWrapper} from "./Blog.styled";
import { images, blogData, blogColors } from "./BlogCardData";
import Img2 from '../../assets/Ellipse 4.png'

const BlogCard = () => {
  return (
    <BlogSection>
       {blogData.map((data, index) => (
        <BlogWrapper
          key={index}
          style={{ backgroundColor: blogColors[index].cardBg }}
        >
            <div className='BlogIcon'>
                <img src={Img2} alt="" />
                <div className='BlogIconContent'>
                    <span>Justin Clifford</span>
                    <p>2 months ago</p>
                </div>
            </div> 
             
          <img src={images[index]} alt="" />
        
          { (
            <Button
              name={"Article"}
              color={blogColors[index].btnBg}
              style={{
                width: "5.625rem",
                margin: "auto",
                fontSize: "0.5rem",
                padding: "5px",
              }}
            />
          )}
         <h4>{data}</h4>
        </BlogWrapper>
      ))}
    </BlogSection>
  )
}

export default BlogCard
