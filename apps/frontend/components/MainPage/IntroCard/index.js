import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { Button } from "../../Common/Button";
import CardTitle1 from "../../Common/CardTitle1";
import Subtract from "../../Subtract";
import Borrow from "./Borrow";
import Buy from "./Buy";
import Earn from "./Earn";
import Exchange from "./Exchange";
import YonaCard from "./YonaCard";

const buttons = ["Buy", "Earn", "Exchange", "Borrow", "YonaCard"];

const steps = {
  Buy: {
    label: "THE RIGHT PLACE TO",
    title: "Buy Digital Assets in Seconds",
    desc: "Buy 60+ assets with card in seconds. Benefit from instant transactions and up to 0.5% in crypto rewards. Wire transfers are also available for your convenience.",
    button: "Buy Now",
    rightElement: <Buy />,
  },
  Earn: {
    label: "THE RIGHT PLACE TO",
    title: "Grow Your Passive Income",
    desc: "Earn daily interest on your digital assets. Top up and start growing your wealth automatically without having to do anything yourself.",
    button: "Start Earning",
    rightElement: <Earn />,
  },
  Exchange: {
    label: "THE RIGHT PLACE TO",
    title: "Get the Most Out of Your Swaps",
    desc: "Exchange 500+ market pairs with zero fees. Buy, sell, or swap all major cryptocurrencies at competitive prices in seconds.",
    button: "Exchange Now",
    rightElement: <Exchange />,
  },
  Borrow: {
    label: "THE RIGHT PLACE TO",
    title: "Borrow Against Your Digital Assets",
    desc: "Get liquidity against your assets at 0% APR with our Instant Crypto Credit Lines. Receive cash or stablecoins to grow your portfolio or even finance your real estate purchase.",
    button: "Exchange Now",
    rightElement: <Borrow />,
  },
  YonaCard: {
    label: "THE RIGHT PLACE TO",
    title: "Get a Crypto Card",
    desc: "Spend without selling your digital assets with the Aqila Card and get up to 2% back on every purchase. All your expenses are financed by a credit line, starting at 0% APR.",
    button: "Exchange Now",
    rightElement: <YonaCard />,
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
        <Group3>
          <CardTitle1 label={STEP.label} title={STEP.title} />
          <Paragraph2>{STEP.desc}</Paragraph2>
          <Group5>
            <Button2>
              <Text18>{STEP.button}</Text18>
              <Riarrowrightline src={"/assets/icon/leftArrow2.svg"} />
            </Button2>
            <Group6>
              <Text14>Learn More</Text14>
              <Riarrowrightline2 src={`./assets/icon/arrowButton.svg`} />
            </Group6>
          </Group5>
        </Group3>
        <Group4>{STEP.rightElement}</Group4>
      </FlexRow>
    </CustomSubtract>
  );
};

export default IntroCard;
const Root = styled.div`
  background: var(--primary-background);
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

const Riarrowrightline = styled(LazyLoadImage)`
  width: 7px;
  height: 12px;
`;

const Riarrowrightline2 = styled(LazyLoadImage)``;

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
  @media (max-width: 690px) {
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
  padding: 0px;
  height: 378px;
  margin-top: -480px;
  @media (max-width: 1100px) {
    flex-direction: column;
    height: auto;
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
  @media (max-width: 480px) {
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
const Group4 = styled.div`
  gap: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 23px 0px 24px 0px;
`;
