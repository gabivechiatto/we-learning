import styled from "styled-components";

export const Container = styled.div`  
  width: 100%;
  display: flex;
  background: var(--green-100);
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: row;  
  justify-content: center;
  gap: 5rem;
`;

export const FooterContent = styled.div`
  text-align: left;
  line-height: 1.8rem;
  display: flex;
  flex-direction: column; 
`;

export const Title = styled.h3`  
  font-size: 0.875rem;
  font-weight: bold;  
`;

export const Content = styled.p`  
  font-size: 0.875rem;   
`;

export const Social = styled.div`  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: center;

  svg{   
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }
  }
`;
