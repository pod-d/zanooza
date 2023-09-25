import styled from "styled-components";

export const ServiceCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three columns with equal width */
  grid-template-rows: 1fr 1fr; /* Two rows with equal height */
  gap: 10px; /* Gap between grid items */
  margin: 0 auto;
  width: fit-content;
  padding: 0 6.5rem 6.5rem;

  h1 {
    grid-column: span 3;
    height: fit-content;
    margin: auto;
    text-align: center;
    color: #000;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.75rem; /* 122.222% */
    letter-spacing: -0.045rem;
  }
`;

export const CardWrapper = styled.div`
  width: 24rem;
  height: 9.75rem;
  border-radius: 0.5rem;
  border: 2px solid var(--neutral-colors-white, #fff);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  color: var(--neutral-colors-black-200, #121212);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.625rem; /* 144.444% */
  letter-spacing: -0.0225rem;
`;

export const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
