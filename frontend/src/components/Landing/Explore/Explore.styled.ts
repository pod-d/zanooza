import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 46.875rem;
  flex-shrink: 0;
  align-items: center;
  padding: 3.88rem 7.5rem;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  width: 18.3125rem;
  height: 18.3125rem;
  flex-shrink: 0;
`;

export const Right = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  height: 100%;
  width: 50%;
  //   border: 1px solid red;
  align-items: center;
  padding: 1rem 0;
`;
export const Left = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h2 {
    color: var(--neutral-colors-black-200, #121212);
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.5rem; /* 116.667% */
    letter-spacing: -0.06rem;
    width: 27.75rem;
    text-align: left;
  }

  .teamBuilding {
    color: var(--primary-colors-purple-purple-500, #a456d8);
  }

  .options {
    display: flex;
    flex-wrap: wrap;
    width: 27.75rem;
    gap: 0.5rem;

    p {
      border-radius: 1.25rem;
      background: rgba(208, 208, 208, 0.2);
      color: var(--neutral-colors-black-200, #121212);
      font-size: 1.5rem;
      font-weight: 450;
      line-height: 2rem;
      letter-spacing: -0.03rem;
      padding: 0.5rem;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
