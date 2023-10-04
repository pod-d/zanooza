import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 7.37rem;
  background-color: white;
`;

export const TopSection = styled.div`
  gap: 0.5rem;
  width: 85%;
  margin: 0 auto;
  background-color: white;
`;

export const BottomSection = styled.div`
  padding: 5.37rem;
  background-color: white;
`;


export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  height: 5rem;
  width: 16rem;
  background-color: #f3ebfa; 
  border: 2px solid #a456d8;
  border-radius: 0.75rem;
  padding: 0.5rem;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  background-color: transparent;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #9031d0; 
  cursor: pointer;
  transition: background-color 0.6s;

  ${RadioInput}:checked + & {
    background-color: #9031d0;
    color: #fff;
  }
`;