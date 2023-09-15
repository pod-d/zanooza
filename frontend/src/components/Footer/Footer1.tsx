import styled from "styled-components";

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
        <div className="ManyBox">
          <div className="MemberParagraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud .
            </p>

            <div className="MemberBoxFooter">
              <p>Logo</p>
              <p>Logo</p>
            </div>
          </div>

          <div className="MemberParagraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud .
            </p>

            <div className="MemberBoxFooter">
              <p>Logo</p>
              <p>Logo</p>
            </div>
          </div>

          <div className="MemberParagraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud .
            </p>

            <div className="MemberBoxFooter">
              <p>Logo</p>
              <p>Logo</p>
            </div>
          </div>

          <div className="MemberParagraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud .
            </p>

            <div className="MemberBoxFooter">
              <p>Logo</p>
              <p>Logo</p>
            </div>
          </div>
        </div>
      </MemberBox>
    </FooterPage1>
  );
};

export default Footer1;

export const FooterPage1 = styled.div`
  position: relative;
  // top: 40;
  left: 0;
  z-index: 100;
  background-color: black;
  //   display: flex;
  //   grid-template-columns: 1fr 1fr 1fr; /* Three columns with equal width */
  //   gap: 10px; /* Gap between grid items */
  //   margin: 20px auto;
  width: 100%;
  height: auto;
  // padding: 7.5rem 0;

  .FooterContentDiv {
    text-align: center;
    color: white;
    padding-top: 7.5rem;
    span {
      color: red;
    }
  }
  .brick-wall {
    display: flex;
    margin-top: 3%;
    flex-direction: column;
    gap: 10px; /* Adjust the gap size as needed */
  }

  .brick-row {
    display: flex;
    gap: 10px; /* Adjust the gap size between bricks in a row */
  }

  .brick {
    height: 50px; /* Height of each brick */
    background-color: grey; /* Brick wall color */
  }

  .brick-small {
    width: 50px; /* Width of small bricks */
  }

  .brick-medium {
    width: 100px; /* Width of medium bricks */
  }

  .brick-large {
    width: 150px; /* Width of large bricks */
  }
`;

export const MemberBox = styled.div`
  gap: 8px;
  margin-top: 5%;

  .ManyBox {
    display: flex;
    // padding: 23px 32px 23px 32px;
    color: white;
    gap: 1.5rem;
    // border: 1px solid red;
    // justify-content: space-between;
  }
  .MemberParagraph {
    border: 1px solid #ffffff;
    padding: 13px 32px 13px 32px;
    heigth: 236px;
    width: 320px;
    font-weigth: 450;
    font-size: 20px;
  }

  .MemberBoxFooter {
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
  }
`;

