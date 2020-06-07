import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/MainTheme";
import GlobalStyle from "../theme/GlobalStyle";
import Navigation from "./Navigation";
import Header from "./Header";
import CurrencyList from "./CurrencyList";
import Calculator from "./Calculator";

const MainWrapper = styled.main`
  width: 100%;
  margin: 30px 0;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 50vw;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.a = "a";
    this.calculator = "calculator";
    this.currentDate = new Date().toISOString().slice(0, 10);
    this.getCurrencyTable = this.getCurrencyTable.bind(this);
    this.getCurrencyCalculator = this.getCurrencyCalculator.bind(this);
    this.state = {
      currencies: [],
      tableDate: "",
      tableNumber: "",
      tableType: "",
      startDate: "",
      endDate: "",
      error: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.tableType !== this.calculator &&
      this.state.endDate !== prevState.endDate
    ) {
      this.getCurrencyTable(this.state.tableType, this.state.endDate);
    }
    if (
      this.state.tableType === this.calculator &&
      this.state.endDate !== prevState.endDate
    ) {
      this.getCurrencyCalculator(this.state.endDate);
    }
  }

  getDate = (date) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 5);
    const startDate = new Date(newDate).toISOString().slice(0, 10);
    this.setState({
      startDate,
    });
  };

  async getCurrencyTable(tableType, endDate) {
    await this.getDate(endDate);
    try {
      const data = await this.fetchData(
        `http://api.nbp.pl/api/exchangerates/tables/${tableType}/${this.state.startDate}/${endDate}/?format=json`
      );
      const { no, effectiveDate, rates } = data.pop();
      this.setState({
        currencies: rates,
        tableDate: effectiveDate,
        tableNumber: no,
        tableType,
        endDate,
        error: null,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error,
      });
    }
  }

  async getCurrencyCalculator(endDate) {
    await this.getDate(endDate);
    try {
      const data = await this.fetchData(
        `http://api.nbp.pl/api/exchangerates/tables/a/${this.state.startDate}/${endDate}?format=json`
      );
      const { no, effectiveDate, rates } = data.pop();
      this.setState({
        currencies: rates,
        tableDate: effectiveDate,
        tableNumber: no,
        tableType: this.calculator,
        endDate,
        error: null,
      });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  async fetchData(url) {
    const response = await fetch(url);
    const parsedResponse = await response.json();

    return parsedResponse;
  }

  handleDate = (e) => {
    e.preventDefault();
    this.setState({
      endDate: e.target.value,
    });
  };

  componentDidMount() {
    this.getCurrencyTable(this.a, this.currentDate);
  }

  render() {
    const {
      currencies,
      tableDate,
      tableNumber,
      tableType,
      endDate,
    } = this.state;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <MainWrapper>
            <MainContainer>
              <Navigation
                getCurrencyTable={this.getCurrencyTable}
                getCurrencyCalculator={this.getCurrencyCalculator}
                handleDate={(e) => this.handleDate(e)}
                tableDate={tableDate}
                endDate={endDate}
              />
              {tableType && (
                <Header
                  tableDate={tableDate}
                  tableNumber={tableNumber}
                  tableType={tableType}
                  endDate={endDate}
                />
              )}
              {tableType !== this.calculator && (
                <CurrencyList currencies={currencies} tableType={tableType} />
              )}
              {tableType === this.calculator && (
                <Calculator currencies={currencies} tableDate={tableDate} />
              )}
            </MainContainer>
          </MainWrapper>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
