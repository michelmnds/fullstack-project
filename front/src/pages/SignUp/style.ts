import styled from "styled-components";

export const SignUpTitle = styled.h1`
  margin: 12rem 0 -8rem 0;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  width: 32rem;
  height: auto;

  margin: 0 auto;
  margin-top: 10rem;

  padding: 1rem;

  gap: 2rem;

  border: 1px solid white;
`;

export const SignUpInput = styled.input`
  width: 31rem;
  height: 2rem;

  padding: 0.5rem;

  background-color: rgb(85, 85, 85);
  color: white;

  border: none;
  border-radius: 16px;
  outline: none;

  font-size: 1.3rem;
`;

export const SignUpButtom = styled.button`
  width: 32rem;
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
