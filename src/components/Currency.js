import React from "react";
import styled from "styled-components";

const TableBodyRow = styled.tr`
  background-color: #ffffff;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  :nth-child(even) {
    background-color: #f1f1f1;
  }
  &:hover {
    background-color: #ccccff;
  }
`;

export const TableBodyCell = styled.td`
  padding: 5px 10px;
  min-width: 120px;
  border-bottom: 1px solid #e3e3e3;
  :first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Icon = styled.img`
  display: block;
  margin-right: 20px;
`;

const Currency = ({ currency, tableType }) => {
  const currencyCodes = [
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CLP",
    "CNY",
    "CZK",
    "DKK",
    "EUR",
    "HKD",
    "THB",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",
    "JPY",
    "KRW",
    "MYR",
    "MXN",
    "NOK",
    "NZD",
    "PHP",
    "RON",
    "RUB",
    "SEK",
    "CHF",
    "GBP",
    "USD",
    "SGD",
    "UAH",
    "TRY",
    "ZAR",
    "XDR",
  ];
  const image = currencyCodes.map((currencyCode) => {
    if (currencyCode === currency.code) {
      const flag = require(`../images/${currencyCode}.png`);
      return <Icon key={currencyCode} src={flag} alt={"flag"} />;
    } else {
      return false;
    }
  });
  return (
    <TableBodyRow>
      <TableBodyCell>
        {image}
        {currency.currency}
      </TableBodyCell>
      <TableBodyCell>{currency.code}</TableBodyCell>
      {tableType === "a" && (
        <TableBodyCell>{currency.mid.toFixed(4)}</TableBodyCell>
      )}
      {tableType === "c" && (
        <>
          <TableBodyCell>{currency.bid.toFixed(4)}</TableBodyCell>
          <TableBodyCell>{currency.ask.toFixed(4)}</TableBodyCell>
        </>
      )}
    </TableBodyRow>
  );
};

export default Currency;
