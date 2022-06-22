import styled from "styled-components";

export const Container = styled.div`  
  width: 100%;         
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const HeaderContent = styled.div`  
  width: 50%;
  display: flex;  
  flex-direction: column;    
`;

export const Title = styled.h1`  
  font-size: 1.5rem;  
  font-weight: bold;  
  text-align: left;
  line-height: 1.8rem;
`;

export const Subtitle = styled.p`  
  font-size: 1rem;
  font-weight: 400; 
  text-align: left;
  line-height: 1.8rem; 
`;

export const CardContainer = styled.div`  
  display: flex; 
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
`;

export const Card = styled.div`  
  max-width: 15%;  
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: var(--white); 
`;

export const CardTitle = styled.h3`  
  font-size: 1.2rem;
  font-weight: bold; 
  text-align: center;
  line-height: 1.8rem; 
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CardSubtitle = styled.p`  
  font-size: 0.875rem;
  font-weight: 400; 
  text-align: center;
  line-height: 1.4rem; 
`;

export const CardSocial = styled.div`  
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`;
