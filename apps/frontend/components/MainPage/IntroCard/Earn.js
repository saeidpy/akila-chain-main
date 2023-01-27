import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  GROUP_197_SVG,
  LOGOS_BITCOIN2_SVG,
  PH_PERCENT_SVG,
} from "../../../assets/static";

const Earn = () => {
  return (
    <Group3>
      <Group7>
        <WhiteFlexColumn7>
          <Image alt="icon" src={PH_PERCENT_SVG} />
        </WhiteFlexColumn7>
        <WhiteFlexColumn8>
          <Image alt="%" src={GROUP_197_SVG} />
          <Group10>
            <Text12>$858.85</Text12>
            <Text13>Earned Today</Text13>
          </Group10>
        </WhiteFlexColumn8>
      </Group7>
      <WhiteFlexColumn5>
        <WhiteFlexColumn9>
          <Text14>Top Up Amount</Text14>
          <Text15>$10,000</Text15>
        </WhiteFlexColumn9>
        <WhiteFlexColumn6>
          <Text10>Crypto Asset</Text10>
          <Group8>
            <Image alt="bitcoin" src={LOGOS_BITCOIN2_SVG} />
            <Text11>Bitcoin</Text11>
          </Group8>
        </WhiteFlexColumn6>
      </WhiteFlexColumn5>
    </Group3>
  );
};

export default Earn;

const Group3 = styled.div`
  position: relative;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
const WhiteFlexColumn5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const WhiteFlexColumn6 = styled.div`
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 28px;
  border-radius: 11px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Text10 = styled.div`
  width: 70px;
  height: 18px;
  font-size: 11px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 17.655001521110535px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Group8 = styled.div`
  height: 23.6px;
  gap: 7.37px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text11 = styled.div`
  width: 42px;
  height: 19px;
  margin: 2px 0px 0px 0px;
  font-size: 12px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  line-height: 19.26000165939331px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Group7 = styled.div`
  position: relative;
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;
const WhiteFlexColumn7 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 14px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const WhiteFlexColumn8 = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 14px 53px 14px 24px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Group10 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text12 = styled.div`
  width: 113px;
  height: 43px;
  font-size: 27px;
  font-weight: 600;
  font-family: Sora;
  line-height: 43.33500373363495px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text13 = styled.div`
  width: 98px;
  height: 24px;
  margin: 0px 0px 0px 1px;
  font-size: 15px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 24.075002074241638px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const WhiteFlexColumn9 = styled.div`
  position: relative;
  gap: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 32px;
  border-radius: 11px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Text14 = styled.div`
  width: 81px;
  height: 18px;
  font-size: 11px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 17.655001521110535px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text15 = styled.div`
  width: 51px;
  height: 19px;
  font-size: 12px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  line-height: 19.26000165939331px;
  white-space: nowrap;
  text-transform: capitalize;
`;
