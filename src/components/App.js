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

const a = "a";
const last = "last";
const calculator = "calculator";

class App extends Component {
  state = {
    currencies: [],
    tableDate: "",
    tableNumber: "",
    tableType: "",
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.tableType !== calculator && this.state.error) {
      this.getCurrencyTable(this.state.tableType);
    }
    if (this.state.tableType === calculator && this.state.error) {
      this.getCurrencyCalculator();
    }
    if (
      this.state.tableType !== calculator &&
      this.state.tableDate !== prevState.tableDate
    ) {
      this.getCurrencyTable(this.state.tableType, this.state.tableDate);
    }
    if (
      this.state.tableType === calculator &&
      this.state.tableDate !== prevState.tableDate
    ) {
      this.getCurrencyCalculator(this.state.tableDate);
    }
  }

  getCurrencyTable = (tableType = a, tableDate = last) => {
    fetch(
      `http://api.nbp.pl/api/exchangerates/tables/${tableType}/${tableDate}/?format=json`
    )
      .then((response) => response.json())
      .then(
        (data) => {
          const currenciesObj = data.shift();
          const { no, effectiveDate, rates } = currenciesObj;
          this.setState({
            currencies: rates,
            tableDate: effectiveDate,
            tableNumber: no,
            tableType,
            error: null,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      )
      .catch((error) => {
        if (error.status !== 200) {
          console.log(error);
        }
      });
  };

  getCurrencyCalculator = (tableDate = last) => {
    fetch(
      `http://api.nbp.pl/api/exchangerates/tables/a/${tableDate}?format=json`
    )
      .then((response) => response.json())
      .then(
        (data) => {
          const currenciesObj = data.shift();
          const { no, effectiveDate, rates } = currenciesObj;
          this.setState({
            currencies: rates,
            tableDate: effectiveDate,
            tableNumber: no,
            tableType: calculator,
            error: null,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      )
      .catch((error) => {
        if (error.status !== 200) {
          console.log(error);
        }
      });
  };

  handleDate = (e) => {
    e.preventDefault();
    this.setState({
      tableDate: e.target.value,
    });
  };

  componentDidMount() {
    this.getCurrencyTable();
  }

  render() {
    const { currencies, tableDate, tableNumber, tableType } = this.state;
    return (
      <>
        <GlobalStyle />
        <MainWrapper>
          <MainContainer>
            <Navigation
              getCurrencyTable={this.getCurrencyTable}
              getCurrencyCalculator={this.getCurrencyCalculator}
              handleDate={(e) => this.handleDate(e)}
              tableDate={tableDate}
            />
            {tableType && (
              <Header
                tableDate={tableDate}
                tableNumber={tableNumber}
                tableType={tableType}
              />
            )}
            {tableType !== calculator && (
              <CurrencyList currencies={currencies} tableType={tableType} />
            )}
            {tableType === calculator && (
              <Calculator currencies={currencies} tableDate={tableDate} />
            )}
          </MainContainer>
        </MainWrapper>
      </>
    );
  }
}

export default App;
