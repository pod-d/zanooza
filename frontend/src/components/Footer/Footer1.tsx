import styled from "styled-components";
import { memberData, star } from "./MemberData";
import MemberCard from "./MemberCard";
import { Fragment } from "react";

const Footer1 = () => {
  return (
    <FooterPage1>
      <div className="FooterContentDiv">
        <h1>
          We have worked with over <span>10k</span> Brand
        </h1>
        <p>
          Don’t pay more than necessary, ever again. All your purchases, at the
          best price.
        </p>
      </div>
      <div className="brick-wall">
        <div className="brick-row">
          <div className="brick brick-small"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-small"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-small"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-small"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
        </div>
        <div className="brick-row">
          <div className="brick brick-large"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-small"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-small"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
        </div>
        <div className="brick-row">
          <div className="brick brick-small"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-small"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-medium"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-large"></div>
          <div className="brick brick-large"></div>
        </div>
      </div>
      <div className="FooterContentDiv">
        <h1>
          And we have worked with over <span>2k</span> Members
        </h1>
        <p>
          Don’t pay more than necessary, ever again. All your purchases, at the
          best price.
        </p>
      </div>
      <MemberBox>
        {memberData.map((data, index) => (
          <MemberCard
            key={index}
            details={data}
            stars={memberData.map((item, index) => (
              <Fragment key={`${item}${index}`}>{star}</Fragment>
            ))}
          />
        ))}
      </MemberBox>
    </FooterPage1>
  );
};

export default Footer1;

export const FooterPage1 = styled.div`
  position: relative;
  left: 0;
  z-index: 100;
  background-color: black;
  width: 100%;
  height: auto;

  .FooterContentDiv {
    text-align: center;
    color: white;
    padding-top: 7.5rem;

    h1 {
      color: #fff;
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 2.75rem; /* 122.222% */
      letter-spacing: -0.045rem;
    }

    p {
      color: #fff;
      font-size: 1.125rem;
      font-weight: 450;
      line-height: 1.625rem; /* 144.444% */
      letter-spacing: -0.0225rem;
    }

    span {
      color: var(--primary-colors-pink-pink-600, #ff4680);
    }
  }

  .brick-wall {
    display: flex;
    margin-top: 3%;
    flex-direction: column;
    gap: 10px; /* Adjust the gap size as needed */
    width: fit-content;
  }

  .brick-row {
    display: flex;
    gap: 10px; /* Adjust the gap size between bricks in a row */
  }

  .brick {
    height: 5.5rem; /* Height of each brick */
    background-color: grey; /* Brick wall color */
  }

  .brick-small {
    width: 7.3125rem; /* Width of small bricks */
  }

  .brick-medium {
    width: 12.5rem;
    /* Width of medium bricks */
  }

  .brick-large {
    width: 18.1875rem; /* Width of large bricks */
  }
`;

export const MemberBox = styled.div`
  display: flex;
  margin-top: 2.5rem;
  gap: 1.5rem;
  overflow-x: auto;
`;
