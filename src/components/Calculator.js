import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Result from "./Result";

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  background-color: #f1f1f1;
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
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CalculatorInput = styled.input`
  height: 30px;
  padding: 0 5px;
  border: 1px solid #e3e3e3;
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CalculatorSelect = styled.select`
  height: 30px;
  padding: 0 5px;
  border: 1px solid #e3e3e3;
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  & > option {
    font-weight: 500;
  }
`;

const CalculatorButton = styled.button`
  width: 70px;
  height: 30px;
  letter-spacing: 0.6px;
  background-color: #005599;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #005599;
    border: 1px solid #005599;
  }
`;

const CalculatorButtonIcon = styled(CalculatorButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
`;

class Calculator extends Component {
  state = {
    amount: 100,
    convertFrom: "PLN",
    convertTo: "EUR",
    result: "",
    isDisabled: false,
  };

  handleChange = (e, name = "") => {
    if (name === "yourAmount") {
      const number = e.target.value;
      if (number > 0 || !number) {
        this.setState({
          amount: number,
          result: "",
        });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        result: "",
      });
    }
  };

  getChangeCalculator = () => {
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

  getCalculateCurrencies = () => {
    const { amount, convertTo, convertFrom } = this.state;
    this.props.currencies.forEach((currency) => {
      if (amount && currency.code === convertTo) {
        this.setState({
          result: amount / currency.mid,
        });
        return true;
      } else if (amount && currency.code === convertFrom) {
        this.setState({
          result: amount * currency.mid,
        });
        return true;
      } else return false;
    });
  };

  render() {
    const { amount, convertFrom, convertTo, result, isDisabled } = this.state;
    const yourAmount = "yourAmount";
    const rendResult = (
      <Result
        amount={amount}
        convertFrom={convertFrom}
        convertTo={convertTo}
        result={result}
        isDisabled={isDisabled}
        tableDate={this.props.tableDate}
      />
    );
    return (
      <>
        <CalculatorWrapper>
          <CalculatorContainer>
            <CalculatorLabel>
              Kwota:
              <CalculatorInput
                name="amount"
                value={amount}
                onChange={(e) => this.handleChange(e, yourAmount)}
                type="number"
              />
            </CalculatorLabel>

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

            <CalculatorButtonIcon onClick={this.getChangeCalculator}>
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
            <CalculatorButton onClick={this.getCalculateCurrencies}>
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
