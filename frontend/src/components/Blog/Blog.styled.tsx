import styled from "styled-components";
import Img1 from "../../assets/Blog1.png"

export const BlogContainer = styled.div`
  display: flex;
  height: 37.5rem;
  padding-top: 7.37rem;
  background-color: whitesmoke;
`;

export const BlogLeft = styled.div`
  display: flex;
  height: 100%;
  //   border: 1px solid red;
  width: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Img1});  
`;
export const BlogRight = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-left: 6rem;
    background-color: white;

    .BlogContent{
        margin-top: 20%;
    }
    .PurpleColor{
        top: 5%;
        color: purple;
        font-size: 16px;
        font-weight: 5px;
    }
    .gaming{
        margin-top: 5%;
    }
    .BlackColor{
        color: var(--neutral-colors-black-200, #121212);
        font-size: 4rem;
        font-weight: 450;
        line-height: 4.5rem; /* 112.5% */
        letter-spacing: -0.08rem;
        font-family: CircularStd-Book;
        // border: 1px solid red;
        // text-align: left;   
    }
    .BlogIcon{
        display: flex;
        margin-top: 5%;
        gap: 1rem;
        // text-align: left;  
    }
    .BlogIconContent{
        p {
            color: grey;
            font-weight: 10px;
        }
    }
`;

export const BlogSection = styled.div`
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three columns with equal width */
  grid-template-rows: 1fr 1fr; /* Two rows with equal height */
  gap: 10px; /* Gap between grid items */
  margin: 0 auto;
  width: fit-content;
  padding: 0 6.5rem 6.5rem;
`;
export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.625rem;
  height: 25.5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 1.5rem;

  .BlogIcon{
    display: flex;
    margin-top: 5px;
    gap: 1rem;
    // text-align: left;  
 }

  .BlogIconContent{
    p {
        color: grey;
        font-weight: 10px;
    }
}
`;