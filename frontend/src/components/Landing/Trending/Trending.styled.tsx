import styled from "styled-components";

export const TrendingWrapper = styled.div`
  width: 75rem;
  height: 37rem;
  margin: 0 auto 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .sectiontop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h3 {
      text-align: center;
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 2.75rem; /* 122.222% */
      letter-spacing: -0.045rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 17.625rem;
  text-align: left;
  gap: 1rem;

  h6 {
    margin-right: auto;
    color: var(--primary-colors-purple-purple-500, #a456d8);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: -0.025rem;
  }

  p {
    font-size: 1rem;
    font-weight: 450;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.02rem;
  }

  .cardimage {
    height: 25rem;
    border-radius: 0.5rem;
    border: 2px solid var(--neutral-colors-white, #fff);
    width: 100%;
  }
`;

export const AllCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;
