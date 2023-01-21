import React from "react";
import styled from "styled-components";

export const FrameRootRootRoot3 = ({}) => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <FrameRootRootRoot>
      <Group5>
        <WhiteFlexRow>
          <Element1 />
          <Text1>Buy</Text1>
        </WhiteFlexRow>
        <WhiteFlexColumn>
          <Text2>Earn</Text2>
        </WhiteFlexColumn>
        <WhiteFlexColumn1>
          <Text3>Exchange</Text3>
        </WhiteFlexColumn1>
        <WhiteFlexColumn2>
          <Text4>Borrow</Text4>
        </WhiteFlexColumn2>
        <WhiteFlexColumn1>
          <Text3>YonaCard</Text3>
        </WhiteFlexColumn1>
      </Group5>
      <Line>
        <Line1 />
      </Line>
      <Group6>
        <Text6>THE RIGHT PLACE TO</Text6>
        <Text7>Buy Digital Assets in Seconds</Text7>
        <Paragraph>
          Buy 60+ assets with card in seconds. Benefit from instant transactions
          and up to 0.5% in crypto rewards. Wire transfers are also available
          for your convenience.
        </Paragraph>
        <Group>
          <Button1 onClick={(e) => Button1Function(e, "Button1")}>
            <Text8>Buy Now</Text8>
            <Riarrowrightline
              src={`https://file.rendit.io/n/ws6jlk5nEo8A8K4iXefp.svg`}
            />
          </Button1>
          <Group1>
            <Text9>Learn More</Text9>
            <Riarrowrightline
              src={`https://file.rendit.io/n/vyoj5TQaK4qjdhWZ5DIf.svg`}
            />
          </Group1>
        </Group>
      </Group6>
      <Group7>
        <Group2>
          <WhiteFlexColumn4>
            <Riaddcircleline
              src={`https://file.rendit.io/n/6Wae2rM7K8McUEarw9Xp.svg`}
            />
          </WhiteFlexColumn4>
          <WhiteFlexColumn5>
            <Group3>
              <Ricoppercoinfill
                src={`https://file.rendit.io/n/4VI51FDEgj69zNuSAE3e.svg`}
              />
              <Element2 />
            </Group3>
            <Group4>
              <Text10>Up to 0.5%</Text10>
              <Text11>In Crpto Rewards</Text11>
            </Group4>
          </WhiteFlexColumn5>
        </Group2>
        <WhiteFlexRow1>
          <PayWithCurrencyUSD1>
            Pay With
            <br />
            Currency:
            <br />
            <PayWithCurrencyUSD>USD</PayWithCurrencyUSD>
          </PayWithCurrencyUSD1>
          <WhiteFlexColumn6>
            <Text12>Credit/Debit Card</Text12>
            <Image1 src={`https://file.rendit.io/n/BpWt0Y8w7TeZlGSLKB7h.svg`} />
          </WhiteFlexColumn6>
        </WhiteFlexRow1>
      </Group7>
    </FrameRootRootRoot>
  );
};

const WhiteFlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8.5px 32px;
  border-radius: 10px;
  background-color: var(--primary-background);
  box-shadow: inset 8px 8px 16px 0px #d0d3d7, inset -8px -8px 16px 0px #ffffff;
`;
const Text3 = styled.div`
  width: 57px;
  height: 15px;
  font-size: 12px;
  font-weight: 500;
  font-family: Plus Jakarta Sans;
  text-align: center;
  white-space: nowrap;
`;
const Riarrowrightline = styled.img`
  width: 20px;
  height: 20px;
`;
const FrameRootRootRoot = styled.div`
  width: 1046px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 21px;
  border-radius: 26px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
  overflow: hidden;
`;
const Group5 = styled.div`
  height: 301px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 36px 42px 0px 0px;
`;
const WhiteFlexRow = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 8.5px 41px;
  border-radius: 10px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Element1 = styled.div`
  width: 6px;
  height: 6px;
  margin: 4.5px 0px 0px 0px;
  border-radius: 3px;
  background-image: linear-gradient(180deg, #fe983f 0%, #ff551f 100%);
`;
const Text1 = styled.div`
  width: 23px;
  height: 15px;
  font-size: 12px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  text-align: center;
  white-space: nowrap;
`;
const WhiteFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8.5px 47.5px;
  border-radius: 10px;
  background-color: var(--primary-background);
  box-shadow: inset 8px 8px 16px 0px #d0d3d7, inset -8px -8px 16px 0px #ffffff;
`;
const Text2 = styled.div`
  width: 26px;
  height: 15px;
  font-size: 12px;
  font-weight: 500;
  font-family: Plus Jakarta Sans;
  text-align: center;
  white-space: nowrap;
`;
const WhiteFlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8.5px 39px;
  border-radius: 10px;
  background-color: var(--primary-background);
  box-shadow: inset 8px 8px 16px 0px #d0d3d7, inset -8px -8px 16px 0px #ffffff;
`;
const Text4 = styled.div`
  width: 43px;
  height: 15px;
  font-size: 12px;
  font-weight: 500;
  font-family: Plus Jakarta Sans;
  text-align: center;
  white-space: nowrap;
`;
const Line = styled.div`
  width: 0px;
  height: 378px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 49px 0px 0px;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: #000000;
`;
const Line1 = styled.div`
  height: 208px;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: #fe762f;
  background-image: linear-gradient(270deg, #fe983f 0%, #ff551f 100%);
`;
const Group6 = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  margin: 0px 48px 0px 0px;
`;
const Text6 = styled.div`
  width: 171px;
  height: 15px;
  margin: 0px 0px 21px 0px;
  color: #0055ff;
  font-size: 12px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
  letter-spacing: 2.94px;
`;
const Text7 = styled.div`
  width: 473px;
  height: 39px;
  margin: 0px 0px 21px 0px;
  font-size: 31.3px;
  font-weight: 600;
  font-family: Sora;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Paragraph = styled.div`
  width: 479px;
  height: 78px;
  margin: 0px 0px 34px 0px;
  font-size: 14px;
  font-family: Plus Jakarta Sans;
  line-height: 26.25px;
  letter-spacing: 0.98px;
`;
const Group = styled.div`
  width: 479px;
  gap: 26.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Button1 = styled.button`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  padding-top: 16px;
  padding-right: 43px;
  padding-bottom: 16px;
  padding-left: 43px;
  border-width: 0px;
  border-radius: 91px;
  box-sizing: content-box;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text8 = styled.div`
  width: 69px;
  height: 20px;
  color: #0055ff;
  font-size: 16px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
`;
const Group1 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 0px;
`;
const Text9 = styled.div`
  width: 86px;
  height: 20px;
  font-size: 16px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
`;
const Group7 = styled.div`
  gap: 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 23px 0px 0px 0px;
`;
const Group2 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const WhiteFlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: flex-start;
  padding: 14px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Riaddcircleline = styled.img`
  width: 40px;
  height: 40px;
`;
const WhiteFlexColumn5 = styled.div`
  height: 154px;
  gap: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 14px 12px 14px 24px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Group3 = styled.div`
  width: 45px;
  height: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 109px 0px 0px;
`;
const Ricoppercoinfill = styled.img`
  width: 40px;
  height: 40px;
  left: 3px;
  top: 0px;
  position: absolute;
`;
const Element2 = styled.div`
  width: 45px;
  height: 30px;
  position: relative;
  border-radius: 2px;
  background-image: linear-gradient(
    180deg,
    rgba(254, 152, 63, 0.16) 0%,
    rgba(255, 85, 31, 0.16) 100%
  );
  backdrop-filter: blur(1px);
`;
const Group4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text10 = styled.div`
  width: 154px;
  height: 43px;
  color: #fe762f;
  font-size: 27px;
  font-weight: 600;
  font-family: Sora;
  line-height: 43.33500373363495px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text11 = styled.div`
  width: 124px;
  height: 24px;
  margin: 0px 0px 0px 1px;
  font-size: 15px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 24.075002074241638px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const WhiteFlexRow1 = styled.div`
  gap: 27px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 22px 22px 22px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const PayWithCurrencyUSD1 = styled.div`
  width: 73px;
  height: 74px;
  align-self: flex-end;
  margin: 0px 0px 3px 0px;
  font-size: 15px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 24.075002074241638px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const PayWithCurrencyUSD = styled.div`
  display: contents;
  font-size: 15px;
  font-weight: 600;
  font-family: Sora;
  line-height: 24.075002074241638px;
  text-transform: capitalize;
`;
const WhiteFlexColumn6 = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 22px 18.7px 19px;
  border-radius: 11px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Text12 = styled.div`
  width: 97px;
  height: 18px;
  font-size: 11px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 17.655001521110535px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Image1 = styled.img`
  width: 87.9px;
  height: 16.3px;
  align-self: flex-end;
  margin: 0px 0.13px 0px 0px;
`;
