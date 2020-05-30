import React from "react";
import styled from "styled-components";
import { TableBodyCell } from "./Currency";
import Currency from "./Currency";

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const TableHeadRow = styled.tr`
  background-color: ${(props) => props.theme.colorTableHead};
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: ${(props) => props.theme.bold600};
  text-align: left;
`;

const TableHeadCell = styled(TableBodyCell)`
  padding: 20px 10px;
  border-bottom: none;
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
    <Table>
      <thead>
        <TableHeadRow>
          {tableType === "a" && (
            <>
              <TableHeadCell>Nazwa waluty</TableHeadCell>
              <TableHeadCell>Kod waluty</TableHeadCell>
              <TableHeadCell>Kurs średni</TableHeadCell>
            </>
          )}
          {tableType === "c" && (
            <>
              <TableHeadCell>Nazwa waluty</TableHeadCell>
              <TableHeadCell>Kod waluty</TableHeadCell>
              <TableHeadCell>Kupno</TableHeadCell>
              <TableHeadCell>Sprzedaż</TableHeadCell>
            </>
          )}
        </TableHeadRow>
      </thead>
      <tbody>{currencyList}</tbody>
    </Table>
  );
};

export default CurrencyList;
