import styled from "styled-components";
import React from 'react';

export default function Header(props) {
  const { title, des, leftElement } = props;
  return (
    <Heading>
      <Title gap={"3px"}>
        <Text7>{title}</Text7>
        <Text8>{des}</Text8>
      </Title>
      {leftElement}
    </Heading>
  );
}

const Heading = styled.div`
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  border-radius: 10px;
  padding: 24px;
  width: 100%;
  flex-wrap: wrap;
  gap: 32px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
  flex: 2;
  border-radius: 10px;
  width: 100%;
  max-width: 724px;
`;
const Text7 = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--text-primary);
  align-self: flex-start;
`;
const Text8 = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: var(--text-secondary);
  align-self: flex-start;
`;
