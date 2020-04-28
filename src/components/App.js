import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Navigation from "./Navigation";
import Header from "./Header";
import CurrencyList from "./CurrencyList";
import Calculator from "./Calculator";

const MainWrapper = styled.div`
  width: 100%;
  margin: 30px 0;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 50vw;
`;

class App extends Component {
  state = {
    currencies: [],
    tableDate: "",
    tableNumber: "",
    tableType: "",
  };

  getCurrencyTable = (tableType, calculator = "") => {
    if (calculator === "calculator") {
      const API = `https://api.nbp.pl/api/exchangerates/tables/a?format=json`;
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          const currenciesObj = data.shift();
          const { effectiveDate, rates } = currenciesObj;
          this.setState({
            currencies: rates,
            tableDate: effectiveDate,
            tableType: "calculator",
          });
        })
        .catch((error) => console.log(error));
    } else {
      const API = `https://api.nbp.pl/api/exchangerates/tables/${tableType}?format=json`;
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          const currenciesObj = data.shift();
          const { no, effectiveDate, rates } = currenciesObj;
          this.setState({
            currencies: rates,
            tableDate: effectiveDate,
            tableNumber: no,
            tableType,
          });
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    const { currencies, tableDate, tableNumber, tableType } = this.state;
    return (
      <>
        <GlobalStyle />
        <MainWrapper>
          <MainContainer>
            <Navigation getCurrencyTable={this.getCurrencyTable} />
            {tableType && (
              <Header
                tableDate={tableDate}
                tableNumber={tableNumber}
                tableType={tableType}
              />
            )}
            {tableType !== "calculator" && (
              <CurrencyList currencies={currencies} tableType={tableType} />
            )}
            {tableType === "calculator" && (
              <Calculator currencies={currencies} tableDate={tableDate} />
            )}
          </MainContainer>
        </MainWrapper>
      </>
    );
  }
}

export default App;
