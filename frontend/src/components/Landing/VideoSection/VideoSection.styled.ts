import styled from "styled-components";

export const VideoSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8125rem;
  width: 66.5rem;
  height: 45.6rem;
  margin: 0 auto 6.44rem auto;

  h3 {
    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.75rem; /* 122.222% */
    letter-spacing: -0.045rem;
  }
`;

export const DarkBackground = styled.div`
  width: 56.25rem;
  height: 37.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  //   opacity: 0.4000000059604645;
  background: var(--neutral-colors-black-200, #121212);
`;
export const PlayBtn = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #b87be1;
  background: var(--primary-colors-purple-purple-400, #b87be1);

  .play {
    fill: #ffffff;
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }
`;

export const BottomTextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .eachtext {
    display: flex;

    p {
      text-align: center;
      font-size: 1.25rem;
      font-weight: 450;
      line-height: 1.75rem; /* 140% */
      letter-spacing: -0.025rem;
    }
  }
`;
