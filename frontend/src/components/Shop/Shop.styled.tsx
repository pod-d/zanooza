import styled from "styled-components";

export const ShopContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: auto;
  padding-top: 7.37rem;
  background-color: white;
  border: 1px solid purple;
  width:100vw;


  .shopContent{
    color: black;
    Text-align: center;

    .merchItem span{
        font-Weight: bold;
    }
  }

  .shopSectionContent{
    display: flex;
    margin-top: 5%;
    margin-bottom: 5%;

    .choose{
        height; 80px;
        width: 870px;
        justify-content; center;
        align-item: center;
        display: flex;
        gap: 32px;

        .chooseH1{
            font-weight: 700;
            font-size: 18px;
            align-item: center;
            color: black;
        }

        .shopRent{
            background: #F3EBFA;
            border-radius: 20px;
            padding: 12px 24px;
            border: 1px solid #9031D0;
            
    
            .shopPurple{
                color: white;
                font-weight: 700;
                font-size: 18px;
                background: #9031D0;
                padding: 12px 32px;
                border-radius: 16px;
                gap: 8px;
                border: none;
            }
    
            button{
                border: none;
                background: #F3EBFA;
                color: #A456D8;
                padding: 12px 32px;
                gap: 8px;
                font-weight: 700;
                font-size: 18px;
            }
        }
    }

   
  }

  .btnPadding{
    gap: 10px;
    display: flex;
    margin-top: 3%;
    margin-bottom: 3%;

    input{
        width: 434px;
        padding: 18px 36px;
        color:  #F4F4F4;
        background-color:  #F4F4F4;
        border: none;
        border-radius: 12px;
    }

    button{
        width: 111px;
        padding: 8px 12px 8px 12px;
        color: white;
        background-color: #A456D8;
        border-radius: 8px;
        border: none;
    }
  }

`;

export const ShopSectionDiv = styled.div`
  border: 1px solid blue;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ShopCardSection1 = styled.div`
  background-color: whitesmoke;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr; /* Three columns with equal width */
  gap: 10px; /* Gap between grid items */
  margin: 0 auto;
  width: fit-content;
  padding: 0 6.5rem 6.5rem;
`;

export const ShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.625rem;
  height: auto;
  flex-shrink: 0;
//   border-radius: 1rem;
  padding: 1rem;
  margin-top: 1.5rem;

  .shopTop{
    margin: 8%;
  }

    .shopbtn{
        display: flex;
        gap: 0.3rem;

    }

    .shopbtn button{
     background: #FCF3EC;
     color: #F29C4A;
     padding: 10px;
     border: none;
     border-radius: 8px;   
    }
    .shopContent{
        
    }
    .shopContent h4{
        font-weight: 700;
        font-size: 25px;
        line-height: 32px;
           
    }
    .shopContent p{
        color: #A0A0A0;
        font-weight: 450;
        font-size:  14px;
        line-height: 20px;
    }

    .shopMoney{
        display: flex;
        justify-content: space-between;
        margin-top: 15%;
    }
    .shopMoney h4{
       font-weight:700;
       font-size: 24px; 
       color: #A456D8;
    }
    .shopMoney button{
        font-weight:500;
        font-size: 14px;
        border-radius: 8px; 
        padding: 10px; 
        color: #A456D8;
        border: none;
     }
}
`;

export const ShopCardSection2 = styled.div`
  border: 1px solid green;
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three columns with equal width */
  grid-template-rowss: 1fr 1fr;
  gap: 10px; /* Gap between grid items */
  margin: 0 auto;
  width: fit-content;
  padding: 0 6.5rem 6.5rem;
  overflow: scroll;
`;

export const FooterPage1 = styled.div`
  position: relative;
  top: 40;
  left: 0;
  z-index: 100;
  background-color: black;
  //   display: flex;
  //   grid-template-columns: 1fr 1fr 1fr; /* Three columns with equal width */
  //   gap: 10px; /* Gap between grid items */
  //   margin: 20px auto;
  width: 100%;
  height: auto;
  //   padding: 0 6.5rem 6.5rem;

  .FooterContentDiv {
    margin-top: 5%;
    text-align: center;
    color: white;
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
    padding: 23px 32px 23px 32px;
    color: white;
    gap: 8px;
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
