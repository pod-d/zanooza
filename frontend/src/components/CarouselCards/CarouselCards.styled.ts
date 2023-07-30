import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.625rem;
  height: 17.5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  padding: 1rem;
  z-index: -1;
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  // overfow-x: scroll;
  overfow-x: hidden;
  width: 100vw;
  height: fit-content;
  // border: 1px solid red;

  .nextCard {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.11));
    background: #fff;
    margin-left: 81rem;
    margin-top: 8rem;
    position: absolute;
  }
`;
