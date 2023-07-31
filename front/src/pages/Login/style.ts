import styled from "styled-components";

export const LoginContainer = styled.main`
  width: 100%;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4rem;
`;

export const LoginTintle = styled.h1`
  padding-top: 10rem;
`;

export const LoginForm = styled.form`
  width: 32rem;
  height: 16rem;

  border: 0.2rem solid white;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
`;

export const InputDiv = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  gap: 8px;

  label {
    font-size: 1.5rem;
  }
`;

export const LoginInput = styled.input`
  width: 28rem;
  height: 2rem;

  padding: 0.5rem;

  background-color: rgb(85, 85, 85);
  color: white;

  border: none;
  border-radius: 16px;
  outline: none;

  font-size: 1.3rem;
`;

export const LoginButton = styled.button`
  width: 29rem;
  height: 2rem;

  padding: 0.5rem;

  background-color: rgb(255, 255, 255);

  color: black;

  border: none;
  border-radius: 16px;
  outline: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.3rem;
`;
