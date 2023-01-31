import React from "react";
import styled from "styled-components";
import { LARGELOGO_SVG } from "../../assets/static";
import { GroupPlatform } from "../Common/GroupPlatform";
import { TitleSection } from "./IntroCard/TitleSection";
export const GroupRoot = ({}) => {
  return (
    <GroupRootRootRoot>
      <GroupPlatform withPattern src={LARGELOGO_SVG}>
        <Element2 top={"50px"} left="-15px">
          <Text2>Company Shares</Text2>
        </Element2>
        <Element2 top={"130px"} left="-60px">
          <Text2>Traveling</Text2>
        </Element2>
        <Element2 top={"220px"} left="0px">
          <Text2>Investment</Text2>
        </Element2>
        <Element5 top={"30px"} left="200px">
          <Text2>Trade Crypto</Text2>
        </Element5>
        <Element5 top={"120px"} left="210px">
          <Text2>
            Lending &<br />
            Borrowing
          </Text2>
        </Element5>
      </GroupPlatform>
      <FlexColumn2>
        <TitleSection
          STEP={{
            label: "One platform for all your needs",
            title:
              "Create your AkilaBanq account to buy, store, trade and earn interest.",
            desc: (
              <>
                - Free multi-currency wallet
                <br />
                - Buy, Sell crypto and Cash out
                <br />- Personal or Business Banking Account (IBAN)
              </>
            ),
          }}
          additionalElement={
            <Element4>
              <Text6>Earn more & beat inflation</Text6>
              <Paragraph2>
                Invest in what you believe in. Invest in fractions of your
                favourite companies with tokenized shares, ETFs. Diversify your
                portfolio by investing in tokenized precious metals. Fortify
                your portfolio with tokenized commodities and shield it against
                inflation.
              </Paragraph2>
            </Element4>
          }
        />
      </FlexColumn2>
    </GroupRootRootRoot>
  );
};

const Element4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const GroupRootRootRoot = styled.div`
  gap: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
const Element2 = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: fit-content;
  padding: 16px 27px;
  border-radius: 30px 30px 0px 30px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Text2 = styled.p`
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;
const Element5 = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: fit-content;
  padding: 12px 27px;
  border-radius: 30px 30px 30px 0px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const FlexColumn2 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text6 = styled.div`
  width: 254px;
  height: 15px;
  margin: 0px 0px 21px 0px;
  color: var(--text-secondary-color);
  font-size: 12px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
  letter-spacing: 2.94px;
  text-transform: uppercase;
`;
const Paragraph2 = styled.div`
  width: 337px;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 400;
  line-height: 28px;
`;
