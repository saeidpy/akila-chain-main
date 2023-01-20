import React from "react";
import styled from "styled-components";

export const GroupRootRootRoot1 = ({}) => {
  return (
    <GroupRootRootRoot>
      <Subtract>
        <Group7>
          <Text1>
            Akila Blockchain <Text2>(Akila Chain)</Text2>
          </Text1>
          <Details src={`https://file.rendit.io/n/phcffskMSBslSQGcixTG.svg`} />
        </Group7>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Paragraph>
      </Subtract>
      <Image1 src={`https://file.rendit.io/n/UXI5NxqbMNK00Dyf4SmV.svg`} />
    </GroupRootRootRoot>
  );
};

const GroupRootRootRoot = styled.div`
  width: 280px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 55px 0px 41px 841px;
`;
const Subtract = styled.div`
  height: 393px;
  left: 0px;
  top: 0px;
  position: absolute;
  gap: 29px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 363px 0px 0px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/RppPzuNQm1DIcqDxCX45.svg");
`;
const Group7 = styled.div`
  width: 200px;
  height: 160px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 556px 0px 0px;
`;
const Text1 = styled.div`
  width: 377px;
  height: 33px;
  left: 71px;
  top: 127px;
  position: absolute;
  color: #232323;
  font-size: 25px;
  font-weight: 600;
  font-family: Sora;
  line-height: 33.07500183582306px;
  text-transform: capitalize;
`;
const Text2 = styled.div`
  display: contents;
  color: #fe762f;
  font-size: 25px;
  font-weight: 300;
  font-family: Sora;
  line-height: 33.07500183582306px;
  text-transform: capitalize;
  text-decoration-line: underline;
`;
const Details = styled.img`
  width: 200px;
  height: 144px;
  position: relative;
`;
const Paragraph = styled.div`
  width: 685px;
  height: 92px;
  align-self: flex-end;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-weight: 300;
  font-family: Plus Jakarta Sans;
  line-height: 22.768001556396484px;
`;
const Image1 = styled.img`
  width: 280px;
  height: 297px;
  position: relative;
`;
