import styled from "styled-components";

export const BrandsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.5rem;
  gap: 2.44rem;
  width: 100vw;

  h1 {
    color: #000;
    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.75rem; /* 122.222% */
    letter-spacing: -0.045rem;
  }
`;
export const BrandsBody = styled.div`
  width: 100%;
  height: 38.0625rem;
  display: flex;
`;

export const BrandsLeft = styled.div<{ $bgImg: string }>`
  width: 50%;
  height: 100%;

  .behind {
    width: 36.75rem;
    height: 36.875rem;
    position: absolute;
    border-radius: 0.5rem;
    border: 1px solid var(--primary-colors-purple-purple-200, #dfc6f2);
    background: var(--primary-colors-purple-purple-100, #f3ebfa);
    z-index: -1;
    margin: 1.19rem 0 0 1.38rem;
  }

  .brandImage {
    background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
    background-size: 100% 100%;
    width: 36.75rem;
    height: 36.875rem;
    border-radius: 0.5rem;
  }
`;
export const BrandsRight = styled.div`
  width: 50%;
  padding: 0 0 0 6.5rem;
  display:flex;
  align-items:center;
`;
export const BrandsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  border-left: 1px solid #fafafa;

  li {
    color: var(--neutral-colors-grey-200, #a0a0a0);
    padding-left: 1.12rem;
    cursor: pointer;
    height: 2.5rem;
    font-size: 1.5rem;
    font-weight: 450;
    line-height: 2rem; /* 133.333% */
    letter-spacing: -0.03rem;
    display: flex;
    align-items: center;
  }

  .left-border {
    border-left: 0.25rem solid #ffc703;
    color: #000;
    font-weight: 700;
  }
`;
