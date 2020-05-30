import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Result from "./Result";
import { Input, Button } from "../theme/CommonStyle";

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  background-color: ${(props) => props.theme.colorBackground};
`;

const CalculatorContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0 10px;
`;

const CalculatorLabel = styled.label`
  width: 150px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CalculatorInput = styled(Input)`
  font-size: ${(props) => props.theme.fontSize.m};
`;

const CalculatorSelect = styled.select`
  height: 30px;
  padding: 0 5px;
  border: 1px solid ${(props) => props.theme.colorBorder};
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: ${(props) => props.theme.bold500};
  & > option {
    font-weight: ${(props) => props.theme.bold500};
  }
`;

const CalculatorButton = styled(Button)`
  width: 70px;
  height: 30px;
  letter-spacing: 0.6px;
  border: 1px solid ${(props) => props.theme.colorButton};
  background-color: ${(props) => props.theme.colorButton};
  color: ${(props) => props.theme.colorWhite};
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colorWhite};
  }
`;

const CalculatorButtonIcon = styled(CalculatorButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.l};
`;

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 100,
      convertFrom: "PLN",
      convertTo: "EUR",
      result: "",
      isDisabled: false,
      currencies: this.props.currencies,
      tableDate: this.props.tableDate,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currencies !== state.currencies) {
      return {
        currencies: props.currencies,
        tableDate: props.tableDate,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currencies !== prevState.currencies) {
      this.calculateCurrencies();
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const number = e.target.value;
    if (number >= 0) {
      this.setState({
        amount: number,
        result: "",
      });
    } else if (number < 0) {
      return false;
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        result: "",
      });
    }
  };

  changeCalculator = () => {
    const { convertFrom, convertTo } = this.state;
    !this.state.isDisabled
      ? this.setState({
          isDisabled: true,
          convertFrom: convertTo,
          convertTo: convertFrom,
          result: "",
        })
      : this.setState({
          isDisabled: false,
          convertFrom: convertTo,
          convertTo: convertFrom,
          result: "",
        });
  };

  calculateCurrencies = () => {
    const { amount, convertTo, convertFrom, currencies } = this.state;
    currencies.forEach((currency) => {
      if (amount > 0 && currency.code === convertTo) {
        this.setState({
          result: amount / currency.mid,
        });
        return true;
      } else if (amount > 0 && currency.code === convertFrom) {
        this.setState({
          result: amount * currency.mid,
        });
        return true;
      } else if (amount <= 0) {
        this.setState({
          amount: "",
        });
        return false;
      }
    });
  };

  componentDidMount() {
    this.calculateCurrencies();
  }

  render() {
    const {
      amount,
      convertFrom,
      convertTo,
      result,
      isDisabled,
      tableDate,
    } = this.state;
    const rendResult = (
      <Result
        amount={amount}
        convertFrom={convertFrom}
        convertTo={convertTo}
        result={result}
        isDisabled={isDisabled}
        tableDate={tableDate}
      />
    );
    return (
      <>
        <CalculatorWrapper>
          <CalculatorContainer>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.calculateCurrencies();
              }}
            >
              <CalculatorLabel htmlFor="number">
                Kwota:
                <CalculatorInput
                  name="amount"
                  value={amount}
                  onChange={(e) => this.handleChange(e)}
                  type="number"
                />
              </CalculatorLabel>
            </form>

            <CalculatorLabel>
              Mam:
              <CalculatorSelect
                name="convertFrom"
                value={convertFrom}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="PLN" disabled={isDisabled}>
                  PLN - Polska
                </option>
                <option value="EUR" disabled={!isDisabled}>
                  EUR - Unia Europejska
                </option>
                <option value="USD" disabled={!isDisabled}>
                  USD - USA
                </option>
                <option value="CHF" disabled={!isDisabled}>
                  CHF - Szwajcaria
                </option>
                <option value="GBP" disabled={!isDisabled}>
                  GBP - W. Brytania
                </option>
                <option value="AUD" disabled={!isDisabled}>
                  AUD - Australia
                </option>
                <option value="BGN" disabled={!isDisabled}>
                  BGN - Bułgaria
                </option>
                <option value="BRL" disabled={!isDisabled}>
                  BRL - Brazylia
                </option>
                <option value="CAD" disabled={!isDisabled}>
                  CAD - Kanada
                </option>
                <option value="CLP" disabled={!isDisabled}>
                  CLP - Chile
                </option>
                <option value="CNY" disabled={!isDisabled}>
                  CNY - Chiny
                </option>
                <option value="CZK" disabled={!isDisabled}>
                  CZK - Czechy
                </option>
                <option value="DKK" disabled={!isDisabled}>
                  DKK - Dania
                </option>
                <option value="HKD" disabled={!isDisabled}>
                  HKD - Hongkong
                </option>
                <option value="HRK" disabled={!isDisabled}>
                  HRK - Chorwacja
                </option>
                <option value="HUF" disabled={!isDisabled}>
                  HUF - Węgry
                </option>
                <option value="IDR" disabled={!isDisabled}>
                  IDR - Indonezja
                </option>
                <option value="ILS" disabled={!isDisabled}>
                  ILS - Izrael
                </option>
                <option value="INR" disabled={!isDisabled}>
                  INR - Indie
                </option>
                <option value="ISK" disabled={!isDisabled}>
                  ISK - Islandia
                </option>
                <option value="JPY" disabled={!isDisabled}>
                  JPY - Japonia
                </option>
                <option value="KRW" disabled={!isDisabled}>
                  KRW - Korea Płd.
                </option>
                <option value="MXN" disabled={!isDisabled}>
                  MXN - Meksyk
                </option>
                <option value="MYR" disabled={!isDisabled}>
                  MYR - Malezja
                </option>
                <option value="NOK" disabled={!isDisabled}>
                  NOK - Norwegia
                </option>
                <option value="NZD" disabled={!isDisabled}>
                  NZD - Nowa Zelandia
                </option>
                <option value="PHP" disabled={!isDisabled}>
                  PHP - Filipiny
                </option>
                <option value="RON" disabled={!isDisabled}>
                  RON - Rumunia
                </option>
                <option value="RUB" disabled={!isDisabled}>
                  RUB - Rosja
                </option>
                <option value="SEK" disabled={!isDisabled}>
                  SEK - Szwecja
                </option>
                <option value="SGD" disabled={!isDisabled}>
                  SGD - Singapur
                </option>
                <option value="THB" disabled={!isDisabled}>
                  THB - Tajlandia
                </option>
                <option value="TRY" disabled={!isDisabled}>
                  TRY - Turcja
                </option>
                <option value="UAH" disabled={!isDisabled}>
                  UAH - Ukraina
                </option>
                <option value="ZAR" disabled={!isDisabled}>
                  ZAR - RPA
                </option>
                <option value="XDR" disabled={!isDisabled}>
                  XDR - MFW (SDR)
                </option>
              </CalculatorSelect>
            </CalculatorLabel>

            <CalculatorButtonIcon onClick={this.changeCalculator}>
              <FontAwesomeIcon icon={faExchangeAlt} />
            </CalculatorButtonIcon>

            <CalculatorLabel>
              Chcę otrzymać:
              <CalculatorSelect
                name="convertTo"
                value={convertTo}
                onChange={(e) => this.handleChange(e)}
              >
                <option value="PLN" disabled={!isDisabled}>
                  PLN - Polska
                </option>
                <option value="EUR" disabled={isDisabled}>
                  EUR - Unia Europejska
                </option>
                <option value="USD" disabled={isDisabled}>
                  USD - USA
                </option>
                <option value="CHF" disabled={isDisabled}>
                  CHF - Szwajcaria
                </option>
                <option value="GBP" disabled={isDisabled}>
                  GBP - W. Brytania
                </option>
                <option value="AUD" disabled={isDisabled}>
                  AUD - Australia
                </option>
                <option value="BGN" disabled={isDisabled}>
                  BGN - Bułgaria
                </option>
                <option value="BRL" disabled={isDisabled}>
                  BRL - Brazylia
                </option>
                <option value="CAD" disabled={isDisabled}>
                  CAD - Kanada
                </option>
                <option value="CLP" disabled={isDisabled}>
                  CLP - Chile
                </option>
                <option value="CNY" disabled={isDisabled}>
                  CNY - Chiny
                </option>
                <option value="CZK" disabled={isDisabled}>
                  CZK - Czechy
                </option>
                <option value="DKK" disabled={isDisabled}>
                  DKK - Dania
                </option>
                <option value="HKD" disabled={isDisabled}>
                  HKD - Hongkong
                </option>
                <option value="HRK" disabled={isDisabled}>
                  HRK - Chorwacja
                </option>
                <option value="HUF" disabled={isDisabled}>
                  HUF - Węgry
                </option>
                <option value="IDR" disabled={isDisabled}>
                  IDR - Indonezja
                </option>
                <option value="ILS" disabled={isDisabled}>
                  ILS - Izrael
                </option>
                <option value="INR" disabled={isDisabled}>
                  INR - Indie
                </option>
                <option value="ISK" disabled={isDisabled}>
                  ISK - Islandia
                </option>
                <option value="JPY" disabled={isDisabled}>
                  JPY - Japonia
                </option>
                <option value="KRW" disabled={isDisabled}>
                  KRW - Korea Płd.
                </option>
                <option value="MXN" disabled={isDisabled}>
                  MXN - Meksyk
                </option>
                <option value="MYR" disabled={isDisabled}>
                  MYR - Malezja
                </option>
                <option value="NOK" disabled={isDisabled}>
                  NOK - Norwegia
                </option>
                <option value="NZD" disabled={isDisabled}>
                  NZD - Nowa Zelandia
                </option>
                <option value="PHP" disabled={isDisabled}>
                  PHP - Filipiny
                </option>
                <option value="RON" disabled={isDisabled}>
                  RON - Rumunia
                </option>
                <option value="RUB" disabled={isDisabled}>
                  RUB - Rosja
                </option>
                <option value="SEK" disabled={isDisabled}>
                  SEK - Szwecja
                </option>
                <option value="SGD" disabled={isDisabled}>
                  SGD - Singapur
                </option>
                <option value="THB" disabled={isDisabled}>
                  THB - Tajlandia
                </option>
                <option value="TRY" disabled={isDisabled}>
                  TRY - Turcja
                </option>
                <option value="UAH" disabled={isDisabled}>
                  UAH - Ukraina
                </option>
                <option value="ZAR" disabled={isDisabled}>
                  ZAR - RPA
                </option>
                <option value="XDR" disabled={isDisabled}>
                  XDR - MFW (SDR)
                </option>
              </CalculatorSelect>
            </CalculatorLabel>
            <CalculatorButton onClick={this.calculateCurrencies}>
              Przelicz
            </CalculatorButton>
          </CalculatorContainer>
          {rendResult}
        </CalculatorWrapper>
      </>
    );
  }
}

export default Calculator;
