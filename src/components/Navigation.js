import React from "react";
import styled from "styled-components";

const NavigationContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid #e3e3e3;
`;

const NavigationTitle = styled.p`
  font-size: 3rem;
  font-weight: 600;
  padding-bottom: 30px;
`;

const NavigationButton = styled.button`
  margin: 0 20px 7px 0;
  border: none;
  background-color: inherit;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-size: 1.8rem;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #005599;
  }
`;

const Navigation = ({
  getCurrencyTable,
  getCurrencyConverter,
}) => {
  const a = "a";
  const c = "c";
  const calculator = "calculator";
  return (
    <NavigationContainer>
      <NavigationTitle>Kursy walut NBP</NavigationTitle>
      <NavigationButton onClick={() => getCurrencyTable(a)}
      >
        Średnie
      </NavigationButton>
      <NavigationButton onClick={() => getCurrencyTable(c)}
      >
        Kupna i sprzedaży
      </NavigationButton>
      <NavigationButton onClick={() =>
          getCurrencyTable(a, calculator)
        }
      >
        Kalkulator walutowy
      </NavigationButton>
    </NavigationContainer>
  );
};

export default Navigation;
