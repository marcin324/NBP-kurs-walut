import React from "react";
import styled from "styled-components";
import { CurrencyContent } from "./Currency";
import Currency from "./Currency";

const CurrencyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* border-spacing: 0; */
`;

const CurrencyListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorTableHead};
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: ${(props) => props.theme.bold600};
  /* text-align: left; */
`;

const CurrencyListTitle = styled(CurrencyContent)`
  padding: 20px 10px;
  border-bottom: none;
`;

const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurrencyList = ({ currencies, tableType }) => {
  const currencyList = currencies.map((currency) => (
    <Currency
      key={currency.code}
      currency={currency}
      tableType={tableType}
      currencyCode={currency.code}
    />
  ));
  return (
    <CurrencyListWrapper>
      <CurrencyListHeader>
        {tableType === "a" && (
          <>
            <CurrencyListTitle>Nazwa waluty</CurrencyListTitle>
            <CurrencyListTitle>Kod waluty</CurrencyListTitle>
            <CurrencyListTitle>Kurs średni</CurrencyListTitle>
          </>
        )}
        {tableType === "c" && (
          <>
            <CurrencyListTitle>Nazwa waluty</CurrencyListTitle>
            <CurrencyListTitle>Kod waluty</CurrencyListTitle>
            <CurrencyListTitle>Kupno</CurrencyListTitle>
            <CurrencyListTitle>Sprzedaż</CurrencyListTitle>
          </>
        )}
      </CurrencyListHeader>
      <CurrencyContainer>{currencyList}</CurrencyContainer>
    </CurrencyListWrapper>
  );
};

export default CurrencyList;
