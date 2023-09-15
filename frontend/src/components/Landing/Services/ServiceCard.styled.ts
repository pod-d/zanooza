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
    margin-top: auto;
    margin-bottom: 2.37rem;
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
  gap: 1.5rem;
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
