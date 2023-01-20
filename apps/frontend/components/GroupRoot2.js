import React from "react";
import styled from "styled-components";

export const GroupRootRootRootRoot3 = ({}) => {
  return (
    <GroupRootRootRootRoot>
      <Image1 src={`https://file.rendit.io/n/GKylYfldGLOVeQl61Jdb.svg`} />
      <FlexColumn>
        <Text1>$130B+</Text1>
        <ProcessedInYears>
          Processed in
          <br />
          5+ years
        </ProcessedInYears>
      </FlexColumn>
    </GroupRootRootRootRoot>
  );
};

const GroupRootRootRootRoot = styled.div`
  position: relative;
  gap: 29.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.01);
`;
const Image1 = styled.img`
  width: 96.5px;
  height: 96.5px;
`;
const FlexColumn = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.01);
`;
const Text1 = styled.div`
  width: 114px;
  height: 38px;
  color: #0055ff;
  font-size: 30px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
  letter-spacing: 0.3px;
  text-transform: capitalize;
`;
const ProcessedInYears = styled.div`
  width: 87px;
  height: 36px;
  font-size: 14px;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
  text-transform: capitalize;
`;
