import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const Exchange = () => {
  return (
    <Group8>
      <WhiteFlexColumn4>
        <Image1 src={`./assets/icon/Group 196.svg`} />
      </WhiteFlexColumn4>
      <WhiteFlexRow1>
        <Group2>
          <Text10>Pay With</Text10>
          <Group4>
            <Logosbitcoin1 src={`./assets/icon/logos_usd.svg`} />
            <Text11>USD</Text11>
          </Group4>
        </Group2>
        <Image2 src={`./assets/icon/leftArrow2.svg`} />
        <Group2>
          <Text10>Receive</Text10>
          <Group4>
            <Logosbitcoin1 src={`./assets/icon/logos_bitcoin(2).svg`} />
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
const Logosbitcoin1 = styled(LazyLoadImage)`
  width: 26px;
  height: 26px;
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
const Image1 = styled(LazyLoadImage)`
  width: 34px;
  height: 34px;
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
const Image2 = styled(LazyLoadImage)`
  width: 13.5px;
  height: 25px;
  color: red;
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
