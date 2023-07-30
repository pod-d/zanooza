import styled from "styled-components";

export const FooterPage1 = styled.div`
    position: absolute;
    bottom: 10;
    left: 0;
    z-index: 100;
    background-color: black;
//   display: flex;
//   grid-template-columns: 1fr 1fr 1fr; /* Three columns with equal width */
//   gap: 10px; /* Gap between grid items */
//   margin: 0 auto;
    width: 100%;
    height: auto;
//   padding: 0 6.5rem 6.5rem;

    .FooterContentDiv{
        margin-top: 5%;
        text-align: center;
        span{
            color: red;
        }
    }
    .brick-wall{
        width: 300px; /* Adjust as needed */
        height: 150px; /* Adjust as needed */
        background-color: #f2f2f2; /* Background color for the mortar between bricks */
        background-image: linear-gradient(45deg, #ccc 25%, transparent 25%), 
                          linear-gradient(-45deg, #ccc 25%, transparent 25%), 
                          linear-gradient(45deg, transparent 75%, #ccc 75%),
                          linear-gradient(-45deg, transparent 75%, #ccc 75%);
        background-size: 20px 20px; /* Adjust to control the brick size */
    }
`;