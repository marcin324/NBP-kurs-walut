import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 30px 10px;
  background-color: #ffffff;
`;

const HeaderTitle = styled.p`
  font-size: 1.9rem;
  font-weight: 600;
`;

const HeaderNumberAndDate = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  color: #696969;
  padding: 0 0 0 20px;
`;

const Header = ({ tableDate, tableNumber, tableType }) => {
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
