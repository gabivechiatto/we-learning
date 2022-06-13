import styled from "styled-components";

export const Container = styled.div`  
  width: 100%;
  display: flex;  
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const Title = styled.h3`  
  font-size: 0.875rem;
  color: var(--green);
  font-weight: bold;  
  text-align: center;
  line-height: 1.8rem;
`;

export const Subtitle = styled.h3`  
  font-size: 1.2rem;
  font-weight: bold; 
  text-align: center;
  line-height: 1.8rem; 
`;

export const Content = styled.p`  
  font-size: 0.875rem;   
  text-align: center;
  line-height: 1.8rem;
`;

export const Form = styled.form` 
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.5rem;   
`;

export const Input = styled.input`  
  width: 350px;
  height: 50px;
  border: none;
  font-size: 0.875rem; 
  outline: none;
  border-start-start-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 0.5rem;
`;

export const Button = styled.button`
  width: 10%; 
  border: none;
  font-weight: 500;
  color: var(--white);
  border-start-end-radius: 8px;
  border-bottom-right-radius: 8px;
  background: var(--green);
  font-size: 0.875rem; 
  
  &:hover {
    opacity: 0.8;
  }
`;
