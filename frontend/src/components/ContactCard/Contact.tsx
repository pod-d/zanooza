import React from 'react'
import {ContactContainer, ContactBox,  ContactDiv } from './Contact.styled'


const Contact = () => {
  return (
    <ContactContainer>
        <ContactBox>
            <div className='ContactContent'>
                <div className='contactDiv'>
                    <h1>Contact Us</h1>
                </div>
                
                <div className='contactParagraph'>
                 <span>Our dedicated coordinators will help plan your experiences free of <br /> charge, allowing you to focus on your to-do list, <br /> while we handle the heavy lifting.</span> 
                </div>


              <div className='joinDiv'>
                  <div>
                    <button className='btnPhone'>+2340829867456</button>
                    <button className='btnEmail'>zannoza@gmail.com</button>
                  </div>

                  <div>
                  <button className='btnPhone'>+2340829867456</button>
                  <button className='btnEmail'>zannoza@gmail.com</button>
                </div>
              </div>
            </div>

            <ContactDiv></ContactDiv>
        </ContactBox>
    </ContactContainer>
  )
}

export default Contact
