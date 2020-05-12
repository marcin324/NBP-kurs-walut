import React from "react";
import styled from "styled-components";
import { Span, Input, Button } from "../theme/CommonStyle";

const NavigationContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid #e3e3e3;
`;

const NavigationHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 0 50px 0;
`;

const NavigationTitle = styled.p`
  font-size: 3rem;
  font-weight: 600;
`;

const NavigationLabel = styled.label`
  flex-basis: 53%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavigationDateInfo = styled(Span)``;

const NavigationInput = styled(Input)`
  &::-webkit-clear-button {
    display: none;
  }
`;

const NavigationButton = styled(Button)`
  margin: 0 20px 7px 0;
  background-color: inherit;
  text-transform: uppercase;
  font-size: 1.8rem;
`;

const Navigation = ({
  getCurrencyTable,
  getCurrencyCalculator,
  handleDate,
  tableDate,
}) => {
  const a = "a";
  const c = "c";
  let today = new Date();
  let currentDate = today.toISOString().slice(0, 10);
  return (
    <NavigationContainer>
      <NavigationHeading>
        <NavigationTitle>Kursy walut NBP</NavigationTitle>
        <NavigationLabel htmlFor="date">
          <NavigationDateInfo>
            Dziś{" "}
            {today.getDate() < 10
              ? `0${today.getDate()}`
              : `${today.getDate()}`}
            .
            {today.getMonth() + 1 < 10
              ? `0${today.getMonth() + 1}`
              : `${today.getMonth() + 1}`}
            .{today.getFullYear()}, wybierz datę:
          </NavigationDateInfo>
          <NavigationInput
            type="date"
            value={tableDate}
            max={currentDate}
            onChange={handleDate}
          />
        </NavigationLabel>
      </NavigationHeading>
      <NavigationButton onClick={() => getCurrencyTable(a, tableDate)}>
        Średnie
      </NavigationButton>
      <NavigationButton onClick={() => getCurrencyTable(c, tableDate)}>
        Kupna i sprzedaży
      </NavigationButton>
      <NavigationButton onClick={() => getCurrencyCalculator(tableDate)}>
        Kalkulator walutowy
      </NavigationButton>
    </NavigationContainer>
  );
};

export default Navigation;
