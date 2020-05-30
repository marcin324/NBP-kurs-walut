import React from "react";
import styled from "styled-components";
import { Span } from "../theme/CommonStyle";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 30px 10px;
`;

const HeaderTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: ${(props) => props.theme.bold600};
`;

const HeaderNumberAndDate = styled(Span)`
  padding: 0 0 0 20px;
`;

const Header = ({ tableDate, tableNumber, tableType, endDate }) => {
  return (
    <HeaderContainer>
      {tableType === "calculator" && (
        <HeaderTitle>
          Kalkulator walutowy
          <HeaderNumberAndDate>
            według kursu średniego NBP z dnia {tableDate}
          </HeaderNumberAndDate>
        </HeaderTitle>
      )}
      {tableType !== "calculator" && (
        <HeaderTitle>
          Tabela kursów {tableType === "a" && `średnich`}{" "}
          {tableType === "c" && `kupna i sprzedaży`} NBP
          <HeaderNumberAndDate>
            nr {tableNumber} z dnia {tableDate}
          </HeaderNumberAndDate>
        </HeaderTitle>
      )}
    </HeaderContainer>
  );
};

export default Header;
