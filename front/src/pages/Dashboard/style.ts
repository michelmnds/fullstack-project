import styled from "styled-components";

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  border-top: 0.2rem solid white;
  border-bottom: 0.2rem solid white;

  width: auto;
  height: 16rem;

  padding: 1rem;
`;

export const MainTitle = styled.h1`
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 1rem 0 1rem 0;
`;

export const ContactContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: auto;

  justify-content: space-around;
  align-items: center;
`;

export const ContactCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  border: 0.2rem solid white;

  width: 32rem;
  height: 16rem;

  padding: 1rem;

  margin: 1rem 0 1rem 0;
`;

export const ContactTitle = styled.h3`
  padding: 1rem 0 1rem 1rem;
`;

export const NoContatTitle = styled.p`
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 98%;
`;

export const HeaderButton = styled.button`
  border: 1px solid white;
  border-radius: 6px;
  outline: none;

  color: white;

  font-size: 1rem;

  background-color: transparent;

  width: 10rem;

  padding: 0.5rem;

  cursor: pointer;
`;
