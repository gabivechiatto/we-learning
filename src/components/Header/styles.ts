import styled from "styled-components";

export const Container = styled.div`  
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;  
  align-items: center;  
  padding: 10px;   
  background: var(--green-100);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;  
`;

export const NavMenu = styled.nav`  
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  gap: 2rem;
`;

export const Link = styled.a`
  font-size: 1rem;  
  font-weight: 500;
  color: var(--gray-900);
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: var(--white);
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;
  padding: 15px;
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
