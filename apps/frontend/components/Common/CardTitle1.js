import React from "react";
import styled from "styled-components";

const CardTitle1 = ({ label, title }) => {
  return (
    <FlexRow>
      <Text16>{label}</Text16>
      <Text17>{title}</Text17>
    </FlexRow>
  );
};

export default CardTitle1;

const Text16 = styled.p`
  color: var(--text-primary-color);
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0.245em;
  text-align: left;
`;

const Text17 = styled.p`
  color: var(--text-secondary);
  font-size: 31px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 24px;
`;
