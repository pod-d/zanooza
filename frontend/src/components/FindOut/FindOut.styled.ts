import styled from "styled-components";

export const FindOutWrapper = styled.div`
  width: 100vw;
  height: 37.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: var(--neutral-colors-black-200, #121212);
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.5rem; /* 116.667% */
    letter-spacing: -0.06rem;
    width: 55.625rem;

    span {
      color: var(--primary-colors-purple-purple-500, #a456d8);
    }
  }

  .floating {
    // border: 1px solid red;
    position: absolute;
    z-index: -1;
  }

  .vr {
    margin-left: -60rem;
    margin-top: -15rem;
  }

  .p1 {
    margin-right: -20rem;
    margin-top: -10rem;
  }

  .pl {
    margin-right: -55rem;
    margin-top: -10rem;
  }

  .p2 {
    margin-bottom: -15rem;
    margin-left: -45rem;
  }

  .gp {
    margin-bottom: -15rem;
    margin-right:-70rem;
  }
`;
