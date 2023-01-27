import React from "react";
import styled from "styled-components";
import { Button } from "../../Common/Button";
import CardTitle1 from "../../Common/CardTitle1";
import Image from "next/image";
import { ARROWBUTTON_SVG, LEFTARROW2_SVG } from "../../../assets/static";

export const TitleSection = ({ STEP, withActionButton, additionalElement }) => {
  return (
    <Group3>
      <CardTitle1 label={STEP.label} title={STEP.title} />
      <Paragraph2>{STEP.desc}</Paragraph2>
      <Group5>
        {withActionButton && (
          <Button2>
            <Text18>{STEP.button}</Text18>
            <Riarrowrightline src={LEFTARROW2_SVG} />
          </Button2>
        )}
        {additionalElement ?? (
          <Group6>
            <Text14>Learn More</Text14>
            <Riarrowrightline2 src={ARROWBUTTON_SVG} />
          </Group6>
        )}
      </Group5>
    </Group3>
  );
};

const Group3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 28px;
  height: 100%;
`;
const Paragraph2 = styled.div`
  font-size: 14px;
  line-height: 26.25px;
  letter-spacing: 0.98px;
`;
const Group5 = styled.div`
  width: 100%;
  gap: 26.5px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Text18 = styled.div`
  height: 20px;
  color: var(--primary);
  font-size: 16px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
`;
const Group6 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
`;
const Button2 = styled(Button)`
  height: 52px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 91px;
  padding: 8px;
  width: 185px;
`;

const Riarrowrightline = styled(Image)`
  width: 7px;
  height: 12px;
`;

const Riarrowrightline2 = styled(Image)``;
const Text14 = styled(Button)`
  text-transform: capitalize;
  display: contents;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
