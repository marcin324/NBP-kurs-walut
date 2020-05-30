import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Span, Input, Button } from "../theme/CommonStyle";

const NavigationContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
`;

const NavigationHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 0 50px 0;
`;

const NavigationTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: ${(props) => props.theme.bold600};
`;

const NavigationLabel = styled.label`
  position: relative;
  flex-basis: 58%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavigationDateInfo = styled(Span)``;

const NavigationInfoIcon = styled.div`
  position: absolute;
  left: 210px;
  top: -2px;
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colorSpan};
  display: inline-block;
  margin-top: -10px;
  padding-top: 10px;
  text-decoration: none;

  &:before {
    animation: hidden ease-in-out 0.2s 1 forwards;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    color: ${(props) => props.theme.colorWhite};
    content: attr(data-tooltip);
    font-size: ${(props) => props.theme.fontSize.xxs};
    opacity: 0;
    padding: 12px;
    position: absolute;
    top: 152px;
    left: -15px;
    transform: translateY(-100%);
    visibility: hidden;
    width: 400px;
    letter-spacing: 0.3px;
    line-height: 20px;
  }

  &:after {
    animation: hidden ease-in-out 0.2s 1 forwards;
    border: solid transparent;
    border-bottom-color: rgba(0, 0, 0, 0.8);
    border-width: 0px 10px 10px 10px;
    content: "";
    height: 0px;
    left: -5px;
    opacity: 0;
    position: absolute;
    top: 38px;
    visibility: hidden;
    width: 0px;
  }

  &:hover:before,
  &:hover:after {
    animation: show ease-in-out 0.4s 1 forwards;
  }

  @keyframes show {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    1% {
      opacity: 0;
      visibility: visible;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes hidden {
    0% {
      opacity: 1;
      visibility: visible;
    }
    99% {
      opacity: 0;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const NavigationInput = styled(Input)`
  &::-webkit-clear-button {
    display: none;
  }
`;

const NavigationButton = styled(Button)`
  margin: 0 20px 7px 0;
  background-color: inherit;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.l};
`;

const Navigation = ({
  getCurrencyTable,
  getCurrencyCalculator,
  handleDate,
  tableDate,
  endDate,
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
          <NavigationInfoIcon data-tooltip="Tabela kursów średnich aktualizowana jest w każdy dzień roboczy między godziną 11:45 i 12:15. Tabela kursów kupna i sprzedaży aktualizowana jest w każdy dzień roboczy między godziną 7:45 i 8:15.">
            <FontAwesomeIcon icon={faInfoCircle} />
          </NavigationInfoIcon>
          <NavigationInput
            type="date"
            value={tableDate}
            max={currentDate}
            onChange={handleDate}
          />
        </NavigationLabel>
      </NavigationHeading>
      <NavigationButton onClick={() => getCurrencyTable(a, endDate)}>
        Średnie
      </NavigationButton>
      <NavigationButton onClick={() => getCurrencyTable(c, endDate)}>
        Kupna i sprzedaży
      </NavigationButton>
      <NavigationButton onClick={() => getCurrencyCalculator(endDate)}>
        Kalkulator walutowy
      </NavigationButton>
    </NavigationContainer>
  );
};

export default Navigation;
