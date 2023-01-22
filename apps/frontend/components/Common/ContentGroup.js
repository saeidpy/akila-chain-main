import React from "react";
import styled from "styled-components";

export const ContentGroup = ({ title, label, desc }) => {
  return (
    <Group7>
      <Text1>
        {title} <Text2>{label}</Text2>
      </Text1>
      <Paragraph>{desc}</Paragraph>
    </Group7>
  );
};

const Group7 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 28px;
`;
const Text1 = styled.p`
  width: 377px;
  height: 33px;
  font-size: 25px;
  font-weight: 600;
  line-height: 33.07500183582306px;
  text-transform: capitalize;
`;
const Text2 = styled.p`
  display: contents;
  color: var(--text-secondary-color);
  font-size: 25px;
  font-weight: 300;
  font-family: Sora;
  line-height: 33.07500183582306px;
  text-transform: capitalize;
  text-decoration-line: underline;
`;
const Paragraph = styled.p`
  width: 685px;
  height: 92px;
  align-self: flex-end;
  color: var(--text-secondary);
  font-size: 16px;
  font-weight: 300;
  line-height: 22.768001556396484px;
`;
const Image1 = styled.img`
  width: 280px;
  height: 297px;
  position: relative;
`;
