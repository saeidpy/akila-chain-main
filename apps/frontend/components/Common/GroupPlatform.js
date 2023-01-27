import React from "react";
import styled from "styled-components";
import ImageNext from "next/image";
import Image from "next/image";
import { DETAILS_SVG, GROUP_213_SVG } from "../../assets/static";

export const GroupPlatform = ({ src, withPattern, className, children }) => {
  return (
    <Flex className={className}>
      <Image alt="icon" src={GROUP_213_SVG} />
      {withPattern && (
        <FlexColumn>
          <Image alt="pattern" src={DETAILS_SVG} />
        </FlexColumn>
      )}
      <Details withPattern={withPattern}>
        {src && <ImageNext alt="icons" src={src} />}
      </Details>
      {children}
    </Flex>
  );
};

const Flex = styled.div`
  width: 317px;
  height: 317px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const FlexColumn = styled.div`
  position: absolute;
`;
const Details = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
`;
