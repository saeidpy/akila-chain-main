import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  GROUP_196_SVG,
  LEFTARROW2_SVG,
  LOGOS_BITCOIN2_SVG,
  LOGOS_USD_SVG,
} from "../../../assets/static";

const Exchange = () => {
  return (
    <Group8>
      <WhiteFlexColumn4>
        <Image alt="icon" src={GROUP_196_SVG} />
      </WhiteFlexColumn4>
      <WhiteFlexRow1>
        <Group2>
          <Text10>Pay With</Text10>
          <Group4>
            <Image alt="usd" src={LOGOS_USD_SVG} />
            <Text11>USD</Text11>
          </Group4>
        </Group2>
        <Image alt="icon" src={LEFTARROW2_SVG} />
        <Group2>
          <Text10>Receive</Text10>
          <Group4>
            <Image alt="bitcoin" src={LOGOS_BITCOIN2_SVG} />
            <Text11>BTC</Text11>
          </Group4>
        </Group2>
      </WhiteFlexRow1>
      <WhiteFlexColumn5>
        <ExchangeFees1>
          0%<ExchangeFees> Exchange Fees</ExchangeFees>
        </ExchangeFees1>
      </WhiteFlexColumn5>
    </Group8>
  );
};

export default Exchange;

const Group4 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Group8 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
`;
const WhiteFlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 15px 12px 15px 11px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const WhiteFlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 16px 25px 22px 25px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Group2 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text10 = styled.div`
  width: 51px;
  height: 19px;
  font-size: 12px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 19.26000165939331px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text11 = styled.div`
  width: 30px;
  height: 22px;
  margin: 2px 0px 0px 0px;
  font-size: 14px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  line-height: 22.470001935958862px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const WhiteFlexColumn5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: flex-start;
  padding: 21px 23px 21px 24px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const ExchangeFees1 = styled.div`
  width: 253px;
  height: 43px;
  color: var(--text-secondary-color);
  font-size: 27px;
  font-weight: 600;
  font-family: Sora;
  line-height: 43.33500373363495px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const ExchangeFees = styled.div`
  display: contents;
  color: #000000;
  font-size: 27px;
  font-weight: 600;
  font-family: Sora;
  line-height: 43.33500373363495px;
  text-transform: capitalize;
`;
