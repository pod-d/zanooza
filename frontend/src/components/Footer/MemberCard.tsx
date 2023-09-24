import styled from "styled-components";
import { MemberCardProps } from "./MemberData";

const MemberCard: React.FC<MemberCardProps> = ({ details, stars }) => {
  return (
    <MemberCardWrapper>
      <p>{details}</p>
      <CardBottom>
        <LogoWrapper>
          <Avatar></Avatar>
          <span>Logo</span>
        </LogoWrapper>
        <StarsWrapper>{stars}</StarsWrapper>
      </CardBottom>
    </MemberCardWrapper>
  );
};

export default MemberCard;

const MemberCardWrapper = styled.div`
  display: flex;
  padding: 1.4375rem 2rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--neutral-colors-white, #fff);

  p {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 450;
    line-height: 1.75rem; /* 140% */
    letter-spacing: -0.025rem;
    width: 20rem;
    height: 14.75rem;
  }
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.02rem;
  }
`;

const Avatar = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: #fff;
  border-radius: 50%;
`;

const StarsWrapper = styled.div`
  display: flex;
`;
