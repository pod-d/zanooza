import styled from "styled-components";
import backgroundImage from "../../../assets/dck1.png";

export const HeroContainer = styled.div`
  display: flex;
  height: calc(100vh - 8.1rem);
  margin-top: 8.1rem;
  background-color: white;
`;

export const HeroLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6rem;

  .desc {
    color: var(--neutral-colors-black-200, #121212);
    font-size: 4rem;
    font-weight: 450;
    line-height: 4.5rem; /* 112.5% */
    letter-spacing: -0.08rem;
    font-family: CircularStd-Book;
    // border: 1px solid red;
    text-align: left;
  }

  .social {
    color: var(--neutral-colors-black-200, #121212);
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.5rem;
    letter-spacing: -0.08rem;
    font-family: CircularStd-Black;
    // border: 1px solid red;
    text-align: left;
  }

  .details {
    color: var(--neutral-colors-black-200, #121212);
    font-size: 1.5rem;
    font-weight: 450;
    line-height: 2rem; /* 133.333% */
    letter-spacing: -0.03rem;
    font-family: CircularStd-Book;
    padding: 0 1rem 0 0;
    text-align: left;
  }

  .bookjoinbtns {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .greendot {
    width: 2rem;
    height: 2rem;
    background: #03ba6c;
    border-radius: 50%;
    z-index: 100;
  }

  .blink {
    width: 4rem;
    height: 4rem;
    background: transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blink::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 3rem;
    background: #bfecd6;
    border-radius: 50%;
    opacity: 0;
    animation: blink 3s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .smalltext {
    // border: 1px solid red;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.625rem;
    letter-spacing: -0.0225rem;
  }

  .greentext {
    color: #32c687;
  }
`;

export const HeroRight = styled.div`
  height: 100%;
  //   border: 1px solid red;
  width: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${backgroundImage});
`;
