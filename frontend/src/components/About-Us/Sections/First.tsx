import React from 'react'
import { Background, LeftContent, InnerContainer, RightContent, InnerImage } from '../Styles/StyledFirst'

function First() {
  return (
    <Background>
      <LeftContent>
        <InnerContainer>
          <p>We leverage the connecting power of</p>
          <strong> 
            interactive, social <span>and </span>competitive </strong> games to create unforgettable experiences
        </InnerContainer>
      </LeftContent>
      <RightContent>
        <InnerImage />
      </RightContent>
    </Background>
  );
}

export default First