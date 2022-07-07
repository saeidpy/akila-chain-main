import styled from "styled-components";
import React from 'react';

export default function Divider({
  className,
  isVertical = false,
  height = "76px",
  color = "rgba(0, 0, 0, 0.1)",
}) {
  return (
    <DividerStyle
      className={className}
      isVertical={isVertical}
      color={color}
      height={height}
    />
  );
}

const DividerStyle = styled.div`
  border-top: ${({ isVertical, color }) =>
    isVertical ? "none" : "1.5px solid " + color};
  border-left: ${({ isVertical, color }) =>
    !isVertical ? "none" : "1.5px solid " + color};
  height: ${({ isVertical }) => (isVertical ? "100%" : "1px")};
  min-height: ${({ isVertical, height }) => (isVertical ? height : "auto")};
  width: ${({ isVertical }) => (!isVertical ? "100%" : "1px")};
`;
