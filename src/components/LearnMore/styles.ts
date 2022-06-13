import styled from "styled-components";

export const Container = styled.div` 
  display: flex;  
  justify-content: center;  
  align-items: center; 
`;

export const HeaderContent = styled.div`  
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const Title = styled.h3`  
  font-size: 2rem;  
  font-weight: bold;  
  text-align: left;
  line-height: 3rem;  
`;

export const Subtitle = styled.p`  
  font-size: 0.875rem;  
  font-weight: 400;    
  text-align: left;
  color: var(--gray-500);
  line-height: 1.8rem; 
  margin-top: 2rem;
`;

export const Divider = styled.div`
  width: 25%;
  border: 3px solid var(--red);
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: row;  

  svg{
    width: 100%;    
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: var(--green);
  font-size: 1rem;  
  font-weight: 600;    
  text-align: left;
  padding-top: 1rem;  

  svg{    
    width: 1rem;
    height: 0.7rem;  
  }

  &:hover{
    opacity: 0.8;
  }
`;
