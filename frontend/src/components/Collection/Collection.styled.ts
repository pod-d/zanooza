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
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1rem;

  .arrowRight {
    margin-left: -4rem;
    margin-top: auto
    margin-bottom: auto
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
`;
