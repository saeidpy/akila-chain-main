import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../Common/Button";
import Subtract from "../../Subtract";
import Borrow from "./Borrow";
import Buy from "./Buy";
import Earn from "./Earn";
import Exchange from "./Exchange";
import { TitleSection } from "./TitleSection";
import AkilaCard from "./AkilaCard";

const buttons = ["Buy", "Earn", "Exchange", "Borrow", "AkilaCard"];

const steps = {
  Buy: {
    label: "PERFECT TO",
    title: "Buy Crypto with Credit or Debit Card instantly",
    desc: "A fast and simple way to buy and sell crypto. More than 300+  digital assets. Can be purchased with excellent market prices. Get up to 0.6% back.",
    button: "Buy Now",
    rightElement: <Buy />,
  },
  Earn: {
    label: "PERFECT TO",
    title: "Earn Interest on Crypto",
    desc: "Invest in crypto and let your passive income to grow. AkilaBanq offers the perfect way to earn interest on your crypto portfolio. Maximize your earnings while keeping your money secure. You can start benefitting from high returns immediately. Withdrawing your money is a breeze.",
    button: "Start Earning",
    rightElement: <Earn />,
  },
  Exchange: {
    label: "PERFECT TO",
    title: "Exchange Any Crypto Instantly",
    desc: "Fast crypto swaps, free of custody. Exchange Bitcoin and 300+ altcoins in a fast, simple and secure way. Unlimited crypto liquidity with minimum price slippage and competitive rates at best price.",
    button: "Exchange Now",
    rightElement: <Exchange />,
  },
  Borrow: {
    label: "PERFECT TO",
    title: "Financing Against a Wide Range of Digital Assets",
    desc: "Rather than selling, AkilaBanq clients can use their cryptocurrencies as collateral towards a cryptocurrency-backed loan. This allows them to maintain ownership of their funds while gaining access to the USD they require.",
    button: "Exchange Now",
    rightElement: <Borrow />,
  },
  AkilaCard: {
    label: "PERFECT TO",
    title: "One Card for All Your Purchases",
    desc: "Pay using cryptocurrencies or euros with over 46 million merchants worldwide. Receive salaries in cryptocurrencies, exchange crypto for euro, and make low-fee online/offline purchases with the Akila crypto debit card.",
    button: "Exchange Now",
    rightElement: <AkilaCard />,
  },
};
const IntroCard = () => {
  const [selected, setSelected] = useState("Buy");
  const [stepSize, setStepSize] = useState(0);
  const STEP = steps[selected];
  return (
    <CustomSubtract>
      <Group2>
        {buttons.map((item, index) => (
          <Button1
            key={item}
            onClick={() => {
              setSelected(item);
              setStepSize(index * 42);
            }}
          >
            {selected === item && <Element3 />}
            <Text11>{item}</Text11>
          </Button1>
        ))}
      </Group2>
      <Line2>
        <Line3 loc={stepSize} />
      </Line2>
      <FlexRow>
        <TitleSection STEP={STEP} additionalElement={<></>} />
        <Group4>{STEP.rightElement}</Group4>
      </FlexRow>
    </CustomSubtract>
  );
};

export default IntroCard;

const FlexRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 48px;
  flex: 7;
  @media (max-width: 1100px) {
    padding: 28px;
  }
  @media (max-width: 790px) {
    flex-direction: column;
  }
`;

const Button1 = styled(Button)`
  height: 32px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 8px;
  width: 100%;
  min-width: 120px;
`;

const CustomSubtract = styled(Subtract)`
  background: var(--primary-background);
  background: linear-gradient(
    72deg,
    rgb(254 152 63 / 14%) 0%,
    rgb(240 240 243) 47%,
    rgb(219 230 251) 100%
  );
  border-radius: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px !important;
  height: 378px;
  @media (max-width: 1100px) {
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 1124px) {
    margin-top: 0px;
  }
`;

const Group2 = styled.div`
  gap: 35.3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  padding: 36px;
  @media (max-width: 1100px) {
    flex-direction: row;
    height: auto;
    overflow: auto;
    width: 100%;
    padding: 28px;
  }
`;
const Element3 = styled.div`
  width: 6px;
  height: 6px;
  margin: 4.5px 0px 0px 0px;
  border-radius: 3px;
  background-image: linear-gradient(180deg, #fe983f 0%, #ff551f 100%);
`;
const Text11 = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
`;
const Line2 = styled.div`
  width: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: var(--borders);
  @media (max-width: 1100px) {
    display: none;
  }
`;
const Line3 = styled.div`
  height: 208px;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: var(--text-secondary-color);
  background-image: linear-gradient(270deg, #fe983f 0%, #ff551f 100%);
  transform: ${({ loc }) => `translateY(${loc}px)`};
  @media (max-width: 1100px) {
    display: none;
  }
`;

const Group4 = styled.div`
  gap: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 23px 0px 24px 0px;
`;
