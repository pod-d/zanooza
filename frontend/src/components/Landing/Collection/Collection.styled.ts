import styled from "styled-components";

export const CollectionSectionWrapper = styled.div`
  width: 83vw;
  height: 44.125rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-bottom: 2rem;

  h3 {
    color: #000;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.75rem; /* 122.222% */
    letter-spacing: -0.045rem;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1rem;

  .pinkcircle {
    background: #ffb3e2;
    border-radius: 50%;
    position: absolute;
  }

  .circle1 {
    width: 2rem;
    height: 2rem;
    margin-left: 40rem;
    margin-top: -5rem;
  }
  .circle2 {
    width: 1rem;
    height: 1rem;
    margin-left: 80rem;
    margin-top: -1.5rem;
  }
  .circle3 {
    width: 3rem;
    height: 3rem;
    margin-top: 37rem;
    margin-left: -2rem;
    z-index: -1;
  }
  .circle4 {
    width: 2rem;
    height: 2rem;
    margin-top: 36.5rem;
    margin-left: 66rem;
  }
`;

export const Card = styled.div`
  width: 17.625rem;
  height: 4.75rem;
  border-radius: 0.75rem;
  border: 1px solid var(--other-colors-bg-color-2, #f4f4f4);
  background: #fff;
  display: flex;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    border: 3px solid #dfc6f2;
  }
`;

export const Left = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: var(--primary-colors-purple-purple-200, #dfc6f2);
`;

export const Right = styled.div`
  width: 12.375rem;
  .experience {
    color: var(--neutral-colors-black-200, #121212);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.02rem;
  }

  .count {
    color: var(--neutral-colors-grey-300, #717171);
    font-size: 0.875rem;
    font-weight: 450;
    line-height: 1.375rem; /* 157.143% */
    letter-spacing: -0.0175rem;
  }

  .arrowRight {
    position: absolute;
    margin-top: -2.5rem;
    margin-left: 11rem;
    font-size: 2rem;
    color: #a456d8;
    // margin-left: -4rem;
    // margin-top: auto;
    // margin-bottom: auto;
  }
`;
