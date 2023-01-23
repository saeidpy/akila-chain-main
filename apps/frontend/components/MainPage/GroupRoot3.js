import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { GroupPlatform } from "../Common/GroupPlatform";
import Subtract from "../Subtract";

export const GroupRoot3 = ({ content, platformProps, withSubtract }) => {
  return (
    <Subtract1 withSubtract={withSubtract}>
      {withSubtract && <Details src={`./assets/icon/Details.svg`} />}
      <div style={{ flex: 2 }}>{content}</div>
      <CustomGroupPlatform {...platformProps} />
    </Subtract1>
  );
};

const CustomGroupPlatform = styled(GroupPlatform)`
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Subtract1 = styled(Subtract)`
  gap: 100px;
  display: flex;
  flex-direction: ${({ withSubtract }) =>
    withSubtract ? "row" : "row-reverse"};
  box-shadow: ${({ withSubtract }) =>
    withSubtract ? "var(--box-shadow)" : "none"};
  justify-content: center;
  align-items: center;
  position: relative;
  padding: ${({ withSubtract }) => (withSubtract ? "32px 64px" : "32px 16px")};
  @media (max-width: 690px) {
    flex-direction: column;
  }
`;
const Details = styled(LazyLoadImage)`
  width: 200px;
  height: 144px;
  top: -10px;
  left: -10px;
  position: absolute;
`;
