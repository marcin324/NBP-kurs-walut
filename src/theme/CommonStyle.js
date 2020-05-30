import styled from "styled-components";

export const Span = styled.span`
  font-weight: ${(props) => props.theme.bold500};
  font-size: ${(props) => props.theme.fontSize.s};
  color: ${(props) => props.theme.colorSpan};
`;

export const Input = styled.input`
  height: 30px;
  padding: 0 5px;
  border: 1px solid ${(props) => props.theme.colorBorder};
  font-family: "Montserrat", sans-serif;
  font-weight: ${(props) => props.theme.bold500};
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
    color: ${(props) => props.theme.colorButton};
  }
`;
