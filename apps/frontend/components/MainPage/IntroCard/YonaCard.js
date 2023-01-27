import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { LOGO_FULL_SVG } from "../../../assets/static";

const YonaCard = () => {
  return (
    <Group3>
      <WhiteFlexColumn5>
        <Image4 src={`./assets/icon/Group 195.svg`} />
      </WhiteFlexColumn5>
      <WhiteFlexColumn6>
        <Text11>Up to 2%</Text11>
        <Text12>In crypto Rewards</Text12>
      </WhiteFlexColumn6>
      <WhiteFlexColumn4>
        <Image1 src={`https://file.rendit.io/n/vaeNblV6ypFVVoYifiz6.svg`} />
        <Logo1>
          <Image2 src={LOGO_FULL_SVG} />
        </Logo1>
        <Image3 src={`https://file.rendit.io/n/7QUnkWbbTnukGpggcG2r.svg`} />
      </WhiteFlexColumn4>
    </Group3>
  );
};

export default YonaCard;

const WhiteFlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 27px 22.5px 26.4px 20px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Image1 = styled.img`
  width: 48px;
  height: 48px;
  margin: 0px 0px 56px 0px;
`;
const Logo1 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 75px 0px;
  padding: 0px 23.5px 0px 25px;
`;
const Image2 = styled.img`
  width: 39px;
  height: 28px;
  margin: 4.45px 0px 0px 0px;
`;
const Text7 = styled.div`
  width: 78px;
  height: 37px;
  font-size: 29px;
  font-weight: 700;
  font-family: Sora;
  white-space: nowrap;
`;
const Image3 = styled.img`
  width: 49.5px;
  height: 30.6px;
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
const Image4 = styled(Image)`
  width: 46px;
  height: 46px;
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
