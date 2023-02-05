import React from "react";
import styled from "styled-components";
import Divider from "../Common/Divider";
import Image from "next/image";
import {
  GROUP_198_SVG,
  GROUP_199_SVG,
  GROUP_200_SVG,
  GROUP_201_SVG,
} from "../../assets/static";

const list = [
  {
    name: "$130B",
    desc: (
      <>
        Processed in <br /> 5+ years
      </>
    ),
    img: GROUP_201_SVG,
    divider: true,
  },
  {
    name: "5M+",
    desc: (
      <>
        Akilachain users <br /> worldwide
      </>
    ),
    img: GROUP_200_SVG,
    divider: true,
  },
  {
    name: "60+",
    desc: (
      <>
        Supported <br /> cryptocurrencies
      </>
    ),
    img: GROUP_199_SVG,
    divider: true,
  },
  {
    name: "200+",
    desc: (
      <>
        Available <br /> jurisdictions
      </>
    ),
    img: GROUP_198_SVG,
  },
];

export const GroupRoot2 = ({}) => {
  return (
    <FlexBox>
      {list.map((item) => (
        <>
          <GroupRootRootRootRoot key={item.name}>
            <Image alt={item.name} src={item.img} />
            <FlexColumn>
              <Text1>{item.name}</Text1>
              <ProcessedInYears>{item.desc}</ProcessedInYears>
            </FlexColumn>
          </GroupRootRootRootRoot>
          {item.divider && <CustomDivider isVertical height={"150px"} />}
        </>
      ))}
    </FlexBox>
  );
};

const CustomDivider = styled(Divider)`
  @media (max-width: 760px) {
    display: none;
  }
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  @media (max-width: 960px) {
  }
`;

const GroupRootRootRootRoot = styled.div`
  position: relative;
  gap: 29.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlexColumn = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  width: 114px;
  color: var(--primary);
  font-size: 30px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
  letter-spacing: 0.3px;
  text-transform: capitalize;
  text-align: center;
`;
const ProcessedInYears = styled.div`
  font-size: 14px;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
  text-transform: capitalize;
  text-align: center;
`;
