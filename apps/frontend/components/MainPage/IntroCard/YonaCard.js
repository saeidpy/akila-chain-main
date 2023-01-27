import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  GROUP_195_SVG,
  LOGO_FULL_SVG,
  SIM_CARD_SVG,
  VISA_SVG,
} from "../../../assets/static";

const YonaCard = () => {
  return (
    <Group3>
      <WhiteFlexColumn5>
        <Image alt="icon" src={GROUP_195_SVG} />
      </WhiteFlexColumn5>
      <WhiteFlexColumn6>
        <Text11>Up to 2%</Text11>
        <Text12>In crypto Rewards</Text12>
      </WhiteFlexColumn6>
      <WhiteFlexColumn4>
        <Image alt="sim-card" src={SIM_CARD_SVG} />
        <Logo1>
          <Image alt="logo" src={LOGO_FULL_SVG} />
        </Logo1>
        <Logo2>
          <Image alt="visa-logo" src={VISA_SVG} />
        </Logo2>
      </WhiteFlexColumn4>
    </Group3>
  );
};

export default YonaCard;

const WhiteFlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 218px;
  height: 300px;
  border-radius: 13px;
  padding: 16px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Logo1 = styled.div`
  margin: 0px 0px 75px 0px;
  padding: 0px 23.5px 0px 25px;
`;
const Logo2 = styled.div`
  align-self: flex-end;
`;

const Group3 = styled.div`
  gap: 23px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
const WhiteFlexColumn5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
  height: 68px;
  width: 68px;
  border-radius: 13px;
`;
const WhiteFlexColumn6 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 41px 15px 40px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
  position: absolute;
  bottom: 20px;
`;
const Text11 = styled.div`
  color: var(--primary);
  font-size: 18px;
  font-weight: 700;
  font-family: Sora;
  line-height: 32.670003175735474px;
  text-align: center;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text12 = styled.div`
  position: relative;
  font-size: 14px;
  font-family: Sora;
  line-height: 25.41000247001648px;
  text-align: center;
  white-space: nowrap;
  text-transform: capitalize;
`;
