import React from "react";
import styled from "styled-components";

export const NewRootRootRootRoot1 = ({}) => {
  return (
    <NewRootRootRootRoot>
      <FlexColumn>
        <Image1 src={`https://file.rendit.io/n/2ObFy5WqL7xjFLirPyrL.png`} />
      </FlexColumn>
      <Content1>
        <Text1>
          Decentralized <Text2>Crypto Exchange</Text2>
        </Text1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Paragraph>
      </Content1>
    </NewRootRootRootRoot>
  );
};

const NewRootRootRootRoot = styled.div`
  gap: 59px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 85px 102px 87px 87px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/QWQVJDOyg5ivOu5X1dBH.svg");
`;
const Image1 = styled.img`
  width: 91px;
  height: 91px;
`;
const Content1 = styled.div`
  gap: 29px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 0px 54px 0px;
`;
const Text1 = styled.div`
  width: 400px;
  height: 33px;
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
const Paragraph = styled.div`
  width: 685px;
  height: 92px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-weight: 300;
  font-family: Plus Jakarta Sans;
  line-height: 22.768001556396484px;
`;
