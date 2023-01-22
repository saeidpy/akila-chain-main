import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { GroupPlatform } from "../Common/GroupPlatform";
import Subtract from "../Subtract";

export const GroupRoot3 = ({ content }) => {
  return (
    <Subtract1>
      <Details src={`https://file.rendit.io/n/phcffskMSBslSQGcixTG.svg`} />
      {content}
      <GroupPlatform />
    </Subtract1>
  );
};

const Subtract1 = styled(Subtract)`
  gap: 29px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 24px 64px;
`;
const Details = styled(LazyLoadImage)`
  width: 200px;
  height: 144px;
  top: 0;
  left: 0;
  position: absolute;
`;
