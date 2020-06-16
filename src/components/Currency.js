import React from "react";
import styled from "styled-components";
import { Image } from "../theme/CommonStyle";

const TableBodyRow = styled.tr`
  font-weight: ${(props) => props.theme.bold500};
  font-size: ${(props) => props.theme.fontSize.l};
  transition: all 0.2s ease-in-out;
  :nth-child(even) {
    background-color: ${(props) => props.theme.colorBackground};
  }
  &:hover {
    background-color: ${(props) => props.theme.colorTableHover};
  }
`;

export const TableBodyCell = styled.td`
  padding: 5px 10px;
  min-width: 120px;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  :first-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    <TableBodyRow>
      <TableBodyCell>
        <Flag src={flag} alt={"country flag"} />
        {currency.currency}
      </TableBodyCell>
      <TableBodyCell>{currency.code}</TableBodyCell>
      {tableType === "a" && (
        <TableBodyCell>
          {currency.mid.toFixed(4).replace(".", ",")}
        </TableBodyCell>
      )}
      {tableType === "c" && (
        <>
          <TableBodyCell>
            {currency.bid.toFixed(4).replace(".", ",")}
          </TableBodyCell>
          <TableBodyCell>
            {currency.ask.toFixed(4).replace(".", ",")}
          </TableBodyCell>
        </>
      )}
    </TableBodyRow>
  );
};

export default Currency;
