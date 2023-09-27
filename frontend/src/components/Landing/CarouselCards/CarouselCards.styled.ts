import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.625rem;
  height: 17.5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  padding: 1rem;
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  overfow-x: hidden;
  width: 100vw;
  height: fit-content;
  overflow-x: scroll;
  align-items: center;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .nextCard {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.11));
    background: #fff;
    left: 95%;
    position: absolute;
    cursor: pointer;
    opacity: 0.7;
  }

  .left {
    left: 1%;
  }
`;
