import React from "react";
import styled from "styled-components";
import { Span } from "../theme/CommonStyle";

const ResultContainer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ResultBigInfo = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ResultBigInfoSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: normal;
`;

const ResultLittleInfoSpan = styled(Span)``;

const Result = ({
  amount,
  convertFrom,
  convertTo,
  result,
  isDisabled,
  tableDate,
}) => {
  return (
    <ResultContainer>
      {!isDisabled && result && (
        <>
          <ResultBigInfo>
            {(amount * 1).toFixed(2)}{" "}
            <ResultBigInfoSpan>{convertFrom}</ResultBigInfoSpan> ={" "}
            {result.toFixed(2)}{" "}
            <ResultBigInfoSpan>{convertTo}</ResultBigInfoSpan>
          </ResultBigInfo>
          <ResultLittleInfoSpan>
            1 {convertFrom} = {(1 / (amount / result)).toFixed(4)} {convertTo}{" "}
            według kursu średniego NBP z dnia {tableDate}
          </ResultLittleInfoSpan>
        </>
      )}
      {isDisabled && result && (
        <>
          <ResultBigInfo>
            {(amount * 1).toFixed(2)}{" "}
            <ResultBigInfoSpan>{convertFrom}</ResultBigInfoSpan> ={" "}
            {result.toFixed(2)}{" "}
            <ResultBigInfoSpan>{convertTo}</ResultBigInfoSpan>
          </ResultBigInfo>
          <ResultLittleInfoSpan>
            1 {convertFrom} = {(result / amount).toFixed(4)} {convertTo} według
            kursu średniego NBP z dnia {tableDate}
          </ResultLittleInfoSpan>
        </>
      )}
    </ResultContainer>
  );
};

export default Result;
