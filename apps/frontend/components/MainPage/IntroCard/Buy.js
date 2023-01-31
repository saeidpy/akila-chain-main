import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { GROUP_179_SVG, GROUP_194_SVG, PLUS_SVG } from "../../../assets/static";

const Buy = () => {
  return (
    <>
      <Group7>
        <WhiteFlexColumn4>
          <Image alt="icon" src={PLUS_SVG} />
        </WhiteFlexColumn4>
        <WhiteFlexColumn5>
          <Image alt="%" src={GROUP_194_SVG} />
          <Group9>
            <Text20>Up to 0.5%</Text20>
            <Text21>In Crpto Rewards</Text21>
          </Group9>
        </WhiteFlexColumn5>
      </Group7>
      <WhiteFlexRow2>
        <PayWithCurrencyUSD1>
          Pay With
          <br />
          Currency:
          <br />
          <PayWithCurrencyUSD>USD</PayWithCurrencyUSD>
        </PayWithCurrencyUSD1>
        <WhiteFlexColumn6>
          <Text22>Credit/Debit Card</Text22>
          <Image alt="visa" src={GROUP_179_SVG} />
        </WhiteFlexColumn6>
      </WhiteFlexRow2>
    </>
  );
};

export default Buy;
const Text22 = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
`;

const Text21 = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-secondary-color);
`;

const Group7 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const WhiteFlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: flex-start;
  padding: 14px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const WhiteFlexColumn5 = styled.div`
  height: 154px;
  gap: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 14px 12px 14px 24px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Group9 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text20 = styled.div`
  width: 154px;
  height: 43px;
  color: var(--text-secondary-color);
  font-size: 27px;
  font-weight: 600;

  line-height: 43.33500373363495px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const WhiteFlexRow2 = styled.div`
  gap: 27px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 22px 22px 22px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const PayWithCurrencyUSD1 = styled.div`
  width: 73px;
  height: 74px;
  align-self: flex-end;
  margin: 0px 0px 3px 0px;
  font-size: 15px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 24.075002074241638px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const PayWithCurrencyUSD = styled.div`
  display: contents;
  font-size: 15px;
  font-weight: 600;

  line-height: 24.075002074241638px;
  text-transform: capitalize;
`;
const WhiteFlexColumn6 = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 22px 18.7px 19px;
  border-radius: 11px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
