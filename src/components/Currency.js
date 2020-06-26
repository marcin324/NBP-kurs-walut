import React from "react";
import styled from "styled-components";
import { Image } from "../theme/CommonStyle";

const CurrencyItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.theme.bold500};
  font-size: ${(props) => props.theme.fontSize.m};
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  transition: all 0.2s ease-in-out;
  :nth-child(even) {
    background-color: ${(props) => props.theme.colorBackground};
  }
  &:hover {
    background-color: ${(props) => props.theme.colorTableHover};
  }
`;

export const CurrencyContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 23%;
  padding: 5px 10px;
  min-width: 120px;
  /* border-bottom: 1px solid ${(props) => props.theme.colorBorder}; */
  :first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-basis: 40%;
  }
  :last-child {
    padding-right: 40px;
  }
`;

const Flag = styled(Image)`
  width: 35px;
  height: 23px;
  margin: 5px 20px 5px 5px;
`;

const Currency = ({ currency, tableType, currencyCode }) => {
  const flag = require(`../images/${currencyCode}.png`);
  return (
    <CurrencyItem>
      <CurrencyContent>
        <Flag src={flag} alt={"country flag"} />
        {currency.currency}
      </CurrencyContent>
      <CurrencyContent>{currency.code}</CurrencyContent>
      {tableType === "a" && (
        <CurrencyContent>
          {currency.mid.toFixed(4).replace(".", ",")}
        </CurrencyContent>
      )}
      {tableType === "c" && (
        <>
          <CurrencyContent>
            {currency.bid.toFixed(4).replace(".", ",")}
          </CurrencyContent>
          <CurrencyContent>
            {currency.ask.toFixed(4).replace(".", ",")}
          </CurrencyContent>
        </>
      )}
    </CurrencyItem>
  );
};

export default Currency;
