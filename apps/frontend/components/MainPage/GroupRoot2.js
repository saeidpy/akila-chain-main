import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import Divider from "../Common/Divider";

const list = [
  {
    name: "$130B",
    desc: (
      <>
        Processed in <br /> 5+ years
      </>
    ),
    img: "201",
    divider: true,
  },
  {
    name: "5M+",
    desc: (
      <>
        Yonachain users <br /> worldwide
      </>
    ),
    img: "200",
    divider: true,
  },
  {
    name: "60+",
    desc: (
      <>
        Supported <br /> cryptocurrencies
      </>
    ),
    img: "199",
    divider: true,
  },
  {
    name: "200+",
    desc: (
      <>
        Available <br /> jurisdictions
      </>
    ),
    img: "198",
  },
];

export const GroupRoot2 = ({}) => {
  return (
    <FlexBox>
      {list.map((item) => (
        <>
          <GroupRootRootRootRoot key={item.name}>
            <Image1 src={`./assets/icon/Group ${item.img}.svg`} />
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
const Image1 = styled(LazyLoadImage)`
  width: 78px;
  height: 78px;
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
