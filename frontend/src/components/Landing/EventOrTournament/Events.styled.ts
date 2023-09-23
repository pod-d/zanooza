import styled from "styled-components";

export const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.88rem 7.5rem;
`;

export const EventsCards = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const EventsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.75rem;
  height: 25rem;
  flex-shrink: 0;
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--other-colors-bg-color-2, #f4f4f4);
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: #000;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.75rem; /* 122.222% */
    letter-spacing: -0.045rem;
  }

  button {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem; /* 142.857% */
    letter-spacing: -0.0175rem;
  }
`;

export const CardImage = styled.div<{ $bgImg: string }>`
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;
  width: 100%;
  height: 13.125rem;
  flex-shrink: 0;
`;
export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;

  p:nth-child(4) {
    margin-top: 1rem;
    color: #000;
    font-size: 1.125rem;
    font-weight: 450;
    line-height: 1.625rem; /* 144.444% */
    letter-spacing: -0.0225rem;
  }

  p:nth-child(1) {
    color: var(--neutral-colors-black-200, #121212);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem; /* 133.333% */
    letter-spacing: -0.03rem;
  }

  p:nth-child(2) {
    color: var(--primary-colors-purple-purple-500, #a456d8);
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.625rem; /* 144.444% */
    letter-spacing: -0.0225rem;
  }

  p:nth-child(3) {
    color: var(--neutral-colors-grey-300, #717171);
    font-size: 1.125rem;
    font-weight: 450;
    line-height: 1.625rem; /* 144.444% */
    letter-spacing: -0.0225rem;
  }
`;
export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 105%;
  justify-content: space-between;

  span:nth-child(1) {
    display: flex;
    padding: 0.25rem 0.75rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: var(--secondary-colors-green-green-100, #eef8f1);
    color: var(--secondary-colors-green-green-500, #32c687);
    font-size: 1.125rem;
    font-weight: 450;
    line-height: 1.625rem; /* 144.444% */
    letter-spacing: -0.0225rem;
  }

  button {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem; /* 142.857% */
    letter-spacing: -0.0175rem;
  }
`;
