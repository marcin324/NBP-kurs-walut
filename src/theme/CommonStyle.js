import styled from "styled-components";

export const Span = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  color: #696969;
`;

export const Input = styled.input`
  height: 30px;
  padding: 0 5px;
  border: 1px solid #e3e3e3;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  border: none;
  font-family: "Montserrat", sans-serif;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #005599;
  }
`;
