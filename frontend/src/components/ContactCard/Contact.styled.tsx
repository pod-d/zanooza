import styled from "styled-components";
import Img3 from "../../assets/contact.png";

export const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 5rem 7.5rem;
  background-color: black;
`;
export const ContactBox = styled.div`
  display: flex;
  width: 70%;
  // top: 80px;
  // left: 120px;
  margin: 10% 10%;
  padding: 5.37rem;
  background: #1c1c1e;
  color: white;
`;
export const ContactContent = styled.div`
  width: 50%;
  .contactDiv {
    h1 {
      font-weight: 700px;
      font-size: 48px;
    }
  }
  .contactParagraph {
    span {
      font-weight: 450px;
      font-size: 20px;
    }
  }
`;

export const ContactDiv = styled.div`
  width: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Img3});
`;
