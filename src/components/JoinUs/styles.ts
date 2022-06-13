import styled from "styled-components";

export const Container = styled.div`  
  display: flex;  
  justify-content: center;  
  align-items: center; 
`;

export const HeaderContent = styled.div`  
  display: flex;
  flex-direction: column;
  width: 74%;
  position: absolute;
  top: 40%;  
  z-index: 10;
`;

export const Title = styled.h3`  
  font-size: 2.5rem;  
  font-weight: bold;  
  text-align: left;
  line-height: 3rem;  
`;

export const Subtitle = styled.h3`  
  font-size: 1rem;  
  font-weight: 400;    
  text-align: left;
  color: var(--gray-500);
  line-height: 1.8rem; 
  margin-top: 2rem;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: row;  

  img{
    width: 90%;
    margin-left: 5rem
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Button = styled.button`
  width: 20%;
  font-size: 1rem;
  font-weight: 500;
  padding: 15px;
  margin-top: 2rem;
  border-radius: 8px;
  border: none;
  background: var(--purple-100);
  color: var(--white);
  text-decoration: none;
  cursor: pointer;  

  &:hover{
    opacity: 0.8;
  }
`;

export const CardsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  z-index: 12;
  margin-top: -9rem;
`;

export const Cards = styled.div`
  max-width: 22%;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: var(--white); 

  svg{
    width: 3rem;
  }
`;

export const CardTitle = styled.h2`
  color: var(--black);
`;

export const CardPhrase = styled.p`
  color: var(--gray-500);
  font-size: 0.875rem;
  line-height: 1.3rem;
`;

export const Divider = styled.div`
  width: 40%;
  border: 1px solid var(--red);
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
