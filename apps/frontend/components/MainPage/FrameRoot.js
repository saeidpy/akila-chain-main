import React from "react";
import styled from "styled-components";
import { TitleSection } from "./IntroCard/TitleSection";
import Image from "next/image";
import {
  DESIGN_SVG,
  DETAILS_SVG,
  GROUP_207_SVG,
  GROUP_208_SVG,
  LOGOS_BITCOIN_SVG,
  LOGOS_ETHEREUM_SVG,
  MONEY_TRANSFER_SVG,
} from "../../assets/static";

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 64px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const FrameRootEl = styled.div`
  flex: 1;
  position: relative;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px;
  border-radius: 26px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
  overflow: hidden;
`;
const Design = styled.div`
  left: 0px;
  top: 0px;
  position: absolute;
`;
const Group2 = styled.div`
  width: 190px;
  height: 127px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: end;
`;
const WhiteFlexRow = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: absolute;
  gap: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 28px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Group3 = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20.4px 0px;
`;
const Group5 = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Text3 = styled.p`
  font-size: 14px;
  font-weight: 600;

  text-transform: capitalize;
`;

const list = [
  {
    label: "PERFECT TO",
    title: "Invite Your Friends and Get Rewards",
    desc: "Reward yourself and help out your friends! Invite as many friends as you want and get unlimited rewards.",
    icon: GROUP_207_SVG,
    element: (
      <Group5>
        <Image alt="money" src={MONEY_TRANSFER_SVG} />
        <Image alt="bit-coin" src={LOGOS_BITCOIN_SVG} />
        <Image alt="eth" src={LOGOS_ETHEREUM_SVG} />
      </Group5>
    ),
  },
  {
    label: "PERFECT TO",
    title: "Build Your Community and Grow With It",
    desc: "Have your marketing plan and earn a revenue share by joining Akila’s marketing plan. Make money every time an invited user do an investment or stakes coins and earns interest. Stake your Akila coin and get rewards. We believe their success is your biggest reward.",
    icon: GROUP_208_SVG,
    element: (
      <Text3>
        No Cap <br />
        No Limit
      </Text3>
    ),
  },
];

export const FrameRoot = ({}) => {
  return (
    <FlexBox>
      {list.map(({ label, title, desc, icon, element }) => (
        <FrameRootEl key={title}>
          <Design>
            <Image alt="pattern" src={DESIGN_SVG} />
          </Design>
          <TitleSection
            STEP={{
              label,
              title,
              desc,
            }}
          />
          <Group2>
            <WhiteFlexRow>
              <Group3>
                <Image alt={title} src={icon} />
              </Group3>
              {element}
            </WhiteFlexRow>
            <Image alt="pattern" src={DETAILS_SVG} />
          </Group2>
        </FrameRootEl>
      ))}
    </FlexBox>
  );
};
