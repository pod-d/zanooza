import React from 'react'
import { BlogContainer, BlogLeft, BlogRight } from "./Blog.styled";
import Img2 from '../../assets/Ellipse 4.png'


const Blog = () => {
  return (
    <BlogContainer>

      <BlogLeft></BlogLeft>

      <BlogRight>
        <div className='BlogContent'>
          <div>
            <span className='PurpleColor'>SHIPS</span>
          </div>
         
          <div className='gaming'>
            <strong className='BlackColor'>Gaming is the new <br /> future AR/VR</strong>
          </div>
         

        </div>
        <div className='BlogIcon'>
          <img src={Img2} alt="" />
          <div className='BlogIconContent'>
           <span>Justin Clifford</span>
           <p>2 months ago</p>
          </div>
          
        </div>
      </BlogRight>

    </BlogContainer>
  )
}

export default Blog
