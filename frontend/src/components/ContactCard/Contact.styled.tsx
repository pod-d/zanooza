import styled from "styled-components";
import Img3 from "../../assets/contact.png";

export const ContactContainer = styled.div`
  padding: 5rem 7.5rem;
  background-color: black;
  display: flex;
  width: 100vw;
  height: 37rem;
  justify-content: center;
  align-items: center;
`;
export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.56rem;
  width: 83.33vw;
  background: #1c1c1e;
  color: white;
  height: 27rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  padding: 3.5rem 4.63rem;
  position: relative;
  z-index: 999;
  overflow: hidden;

  .spiral1 {
    top: -4rem;
    left: 0;
    width: 8.34513rem;
    height: 7.93113rem;
    flex-shrink: 0;
  }

  .spiral2 {
    width: 2.17031rem;
    height: 2.11169rem;
    flex-shrink: 0;
    top: 1.41rem;
    left: 25.53rem;
  }

  .spiral3 {
    width: 12.11606rem;
    height: 12.14125rem;
    flex-shrink: 0;
    top: -4.67rem;
    left: 34.77rem;
  }

  .spiral4 {
    width: 3.38694rem;
    height: 3.326rem;
    flex-shrink: 0;
    left: 4.08rem;
    top: 23.29rem;
  }

  .spiral5 {
    width: 3.01125rem;
    height: 2.92656rem;
    flex-shrink: 0;
    top: 21.84rem;
    left: 37.71rem;
  }

  .spiral6 {
    width: 4.42031rem;
    height: 4.59138rem;
    flex-shrink: 0;
    top: 7.21rem;
    left: 62.26rem;
  }

  .spiral7 {
    width: 7.10888rem;
    height: 7.2825rem;
    flex-shrink: 0;
    left: 18.43rem;
    top: 13.39rem;
  }

  .spiral8 {
    width: 9.02956rem;
    height: 9.44425rem;
    flex-shrink: 0;
    left: 50.8rem;
    top: 18.58rem;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.5rem; /* 116.667% */
    letter-spacing: -0.06rem;
  }

  p {
    color: var(--neutral-colors-grey-100, #d0d0d0);
    font-size: 1.25rem;
    font-weight: 450;
    line-height: 1.75rem; /* 140% */
    letter-spacing: -0.025rem;
  }
`;

export const ContactDiv = styled.div`
  width: 26vw;
  height: 26vw;
  flex-shrink: 0;
  background: url("${Img3}") no-repeat center;
  background-size: 100% 100%;
`;

export const SpiralVector = styled.svg`
  position: absolute;
  // z-index: 2;
`;

export const ContactInfo = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  align-items: center;
  gap: 0.75rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.1);
  width: fit-content;

  span {
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 450;
    line-height: 2rem; /* 133.333% */
    letter-spacing: -0.03rem;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.56rem;
`;
