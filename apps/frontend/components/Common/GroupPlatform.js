import React from "react";
import styled from "styled-components";
import ImageNext from "next/image";

export const GroupPlatform = ({ src, withPattern, className, children }) => {
  return (
    <FlexColumn className={className}>
      <Details withPattern={withPattern}>
        {src && <Image alt="icons" src={src} />}
      </Details>
      {children}
    </FlexColumn>
  );
};

const FlexColumn = styled.div`
  width: 317px;
  height: 317px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url("./assets/icon/Group 213.svg");
  position: relative;
`;
const Details = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
  background-size: cover;
  background-image: ${({ withPattern }) =>
    withPattern ? 'url("./assets/icon/Details.svg")' : "none"};
`;
const Image = styled(ImageNext)`
  position: absolute;
`;
