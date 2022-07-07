import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Parent>
      <Svg id="triangle" width="100px" height="100px" viewBox="-3 -4 39 39">
        <Polygon
          fill="#EFEFEF"
          stroke="#333333"
          strokeWidth="1"
          points="16,0 32,32 0,32"
        ></Polygon>
      </Svg>
    </Parent>
  );
};

const dash = keyframes`
to {
    stroke-dashoffset: 136;
}
`;

const Parent = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Svg = styled.svg`
  transform-origin: 50% 65%;
  stroke-dasharray: 17;
  -webkit-animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;

const Polygon = styled.polygon`
  stroke-dasharray: 17;
  -webkit-animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;

export default Loading;
