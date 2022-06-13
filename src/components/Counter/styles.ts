import styled from "styled-components";

export const Container = styled.div` 
  width: 100%;
  display: flex; 
  justify-content: center;   
  align-items: center; 
  gap: 5rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

export const CounterContent = styled.div`  
  display: flex;  
  flex-direction: column;  
  text-align: center;   
`;

export const CounterTitle = styled.h1` 
  font-size: 3.5rem; 
  font-weight: 700;
  color: var(--green);  
`;

export const CounterText = styled.p`  
  font-size: 1rem;
  font-weight: 700;
`;
