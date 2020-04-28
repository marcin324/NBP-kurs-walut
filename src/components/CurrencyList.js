import React from "react";
import styled from "styled-components";
import { TableBodyCell } from "./Currency";
import Currency from "./Currency";

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const TableHeadRow = styled.tr`
  background-color: #f3f6f9;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: left;
`;

const TableHeadCell = styled(TableBodyCell)`
  padding: 20px 10px;
`;

const CurrencyList = ({ currencies, tableType }) => {
  const currencyList = currencies.map((currency) => (
    <Currency key={currency.code} currency={currency} tableType={tableType} />
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
