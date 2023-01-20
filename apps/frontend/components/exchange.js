import React from "react";
import styled from "styled-components";

export const FrameRootRootRoot4 = ({}) => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <FrameRootRootRoot>
      <Group6>
        <WhiteFlexColumn>
          <Text1>Buy</Text1>
        </WhiteFlexColumn>
        <WhiteFlexColumn1>
          <Text2>Earn</Text2>
        </WhiteFlexColumn1>
        <WhiteFlexRow>
          <Element1 />
          <Text3>Exchange</Text3>
        </WhiteFlexRow>
        <WhiteFlexColumn2>
          <Text4>Borrow</Text4>
        </WhiteFlexColumn2>
        <WhiteFlexColumn3>
          <Text5>YonaCard</Text5>
        </WhiteFlexColumn3>
      </Group6>
      <Line>
        <Line1 />
      </Line>
      <Group7>
        <Text6>THE RIGHT PLACE TO</Text6>
        <Text7>Get the Most Out of Your Swaps</Text7>
        <Paragraph>
          Exchange 500+ market pairs with zero fees. Buy, sell, or swap all
          major cryptocurrencies at competitive prices in seconds.
        </Paragraph>
        <Group>
          <Button1 onClick={(e) => Button1Function(e, "Button1")}>
            <Text8>Exchange Now</Text8>
            <Riarrowrightline
              src={`https://file.rendit.io/n/QyymSLGYD1Ypx5sR3zMb.svg`}
            />
          </Button1>
          <Group1>
            <Text9>Learn More</Text9>
            <Riarrowrightline
              src={`https://file.rendit.io/n/bQnmPaoY6Uj7sYE5mbvO.svg`}
            />
          </Group1>
        </Group>
      </Group7>
      <Group8>
        <WhiteFlexColumn4>
          <Image1 src={`https://file.rendit.io/n/u6WzTy3WxtRj0ngD5TJa.svg`} />
          <Element2 />
        </WhiteFlexColumn4>
        <WhiteFlexRow1>
          <Group2>
            <Text10>Pay With</Text10>
            <Group4>
              <Logosbitcoin1
                src={`https://file.rendit.io/n/aC9QC6UfGg3UxbnRtp0K.svg`}
              />
              <Text11>USD</Text11>
            </Group4>
          </Group2>
          <Image2 src={`https://file.rendit.io/n/2W0TXHWKVpgCQrQKXPiU.svg`} />
          <Group3>
            <Text12>Receive</Text12>
            <Group4>
              <Logosbitcoin1
                src={`https://file.rendit.io/n/qQOnAtF9YTQZNNjapo4e.svg`}
              />
              <Text13>BTC</Text13>
            </Group4>
          </Group3>
        </WhiteFlexRow1>
        <WhiteFlexColumn5>
          <ExchangeFees1>
            0%<ExchangeFees> Exchange Fees</ExchangeFees>
          </ExchangeFees1>
        </WhiteFlexColumn5>
      </Group8>
    </FrameRootRootRoot>
  );
};

const Riarrowrightline = styled.img`
  width: 20px;
  height: 20px;
`;
const Group4 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Logosbitcoin1 = styled.img`
  width: 26px;
  height: 26px;
`;
const FrameRootRootRoot = styled.div`
  width: 999px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 44px 0px 45px;
  border-radius: 26px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
  overflow: hidden;
`;
const Group6 = styled.div`
  height: 301px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 36px 42px 0px 0px;
`;
const WhiteFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8.5px 49.5px;
  border-radius: 10px;
  background-color: #f0f0f3;
  box-shadow: inset 8px 8px 16px 0px #d0d3d7, inset -8px -8px 16px 0px #ffffff;
`;
const Text1 = styled.div`
  width: 22px;
  height: 15px;
  font-size: 12px;
  font-weight: 500;
  font-family: Plus Jakarta Sans;
  text-align: center;
  white-space: nowrap;
`;
const WhiteFlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8.5px 47.5px;
  border-radius: 10px;
  background-color: #f0f0f3;
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
const WhiteFlexRow = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 8.5px 23.5px;
  border-radius: 10px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const Element1 = styled.div`
  width: 6px;
  height: 6px;
  margin: 4.5px 0px 0px 0px;
  border-radius: 3px;
  background-image: linear-gradient(180deg, #fe983f 0%, #ff551f 100%);
`;
const Text3 = styled.div`
  width: 58px;
  height: 15px;
  font-size: 12px;
  font-weight: 700;
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
  background-color: #f0f0f3;
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
const WhiteFlexColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8.5px 32px;
  border-radius: 10px;
  background-color: #f0f0f3;
  box-shadow: inset 8px 8px 16px 0px #d0d3d7, inset -8px -8px 16px 0px #ffffff;
`;
const Text5 = styled.div`
  width: 57px;
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
const Group7 = styled.div`
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  margin: 0px 19px 0px 0px;
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
  width: 441px;
  height: 78px;
  margin: 0px 0px 12px 0px;
  font-size: 31.3px;
  font-weight: 600;
  font-family: Sora;
  text-transform: capitalize;
`;
const Paragraph = styled.div`
  width: 467px;
  height: 52px;
  margin: 0px 0px 30px 0px;
  font-size: 14px;
  font-family: Plus Jakarta Sans;
  line-height: 26.25px;
  letter-spacing: 0.98px;
`;
const Group = styled.div`
  width: 467px;
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
  padding-right: 20px;
  padding-bottom: 16px;
  padding-left: 20px;
  border-width: 0px;
  border-radius: 91px;
  box-sizing: content-box;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text8 = styled.div`
  width: 115px;
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
const Group8 = styled.div`
  height: 302px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin: 34px 0px 0px 0px;
`;
const WhiteFlexColumn4 = styled.div`
  width: 45px;
  height: 38px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 15px 12px 15px 11px;
  border-radius: 13px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const Image1 = styled.img`
  width: 34px;
  height: 34px;
  left: 17px;
  top: 7px;
  position: absolute;
`;
const Element2 = styled.div`
  width: 45px;
  height: 24px;
  position: relative;
  border-radius: 2px;
  background-image: linear-gradient(
    180deg,
    rgba(254, 152, 63, 0.16) 0%,
    rgba(255, 85, 31, 0.16) 100%
  );
  backdrop-filter: blur(1px);
`;
const WhiteFlexRow1 = styled.div`
  width: 209px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 25px 22px 25px;
  border-radius: 13px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const Group2 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 34.5px 0px 0px;
`;
const Text10 = styled.div`
  width: 51px;
  height: 19px;
  font-size: 12px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 19.26000165939331px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text11 = styled.div`
  width: 30px;
  height: 22px;
  margin: 2px 0px 0px 0px;
  font-size: 14px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  line-height: 22.470001935958862px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Image2 = styled.img`
  width: 13.5px;
  height: 25px;
  align-self: flex-end;
  margin: 0px 28px 11px 0px;
`;
const Group3 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text12 = styled.div`
  width: 47px;
  height: 19px;
  font-size: 12px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 19.26000165939331px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text13 = styled.div`
  width: 28px;
  height: 22px;
  margin: 2px 0px 0px 0px;
  font-size: 14px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  line-height: 22.470001935958862px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const WhiteFlexColumn5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: flex-start;
  padding: 21px 23px 21px 24px;
  border-radius: 13px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const ExchangeFees1 = styled.div`
  width: 253px;
  height: 43px;
  color: #fe762f;
  font-size: 27px;
  font-weight: 600;
  font-family: Sora;
  line-height: 43.33500373363495px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const ExchangeFees = styled.div`
  display: contents;
  color: #000000;
  font-size: 27px;
  font-weight: 600;
  font-family: Sora;
  line-height: 43.33500373363495px;
  text-transform: capitalize;
`;
