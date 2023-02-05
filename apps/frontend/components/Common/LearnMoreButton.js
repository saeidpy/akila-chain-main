import React from "react";
import Image from "next/image";
import { ARROWBUTTON_SVG } from "../../assets/static";
import { Button } from "./Button";
import styled from "styled-components";

function LearnMoreButton() {
  return (
    <Group6>
      <Text14>Learn More</Text14>
      <Image alt="icon" src={ARROWBUTTON_SVG} />
    </Group6>
  );
}

export default LearnMoreButton;
const Group6 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
`;

const Text14 = styled(Button)`
  text-transform: capitalize;
  display: contents;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
