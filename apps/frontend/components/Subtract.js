import styled from "styled-components";
import React from 'react';

export default function Subtract(props) {
  const { children, className } = props;
  return <SubtractStyle className={className}>{children}</SubtractStyle>;
}

const SubtractStyle = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: var(--box-shadow);
  padding: 55px;
  border-radius: 16px;
`;
