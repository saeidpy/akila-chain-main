import React from "react";
import styled from "styled-components";

export const FrameRootRootRoot1 = ({}) => {
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
        <WhiteFlexColumn2>
          <Text3>Exchange</Text3>
        </WhiteFlexColumn2>
        <WhiteFlexRow>
          <Element1 />
          <Text4>Borrow</Text4>
        </WhiteFlexRow>
        <WhiteFlexColumn2>
          <Text3>YonaCard</Text3>
        </WhiteFlexColumn2>
      </Group6>
      <Line>
        <Line1 />
      </Line>
      <Group8>
        <Group>
          <Group2>
            <Text6>THE RIGHT PLACE TO</Text6>
            <Text7>Borrow Against Your Digital Assets</Text7>
            <Paragraph>
              Get liquidity against your assets at 0% APR with our Instant
              Crypto Credit Lines. Receive cash or stablecoins to grow your
              portfolio or even finance your real estate purchase.
            </Paragraph>
          </Group2>
          <WhiteFlexColumn4>
            <Logosethereum
              src={`https://file.rendit.io/n/jo4kIx64GkKCSo7YQhqF.svg`}
            />
            <Logosbitcoin
              src={`https://file.rendit.io/n/yL2UxM9iF0VPIjpMQyCH.svg`}
            />
            <Group3>
              <Phwalletfill
                src={`https://file.rendit.io/n/ED2wO0fEAgWkXXLGly4v.svg`}
              />
              <BlueRectangle />
            </Group3>
          </WhiteFlexColumn4>
        </Group>
        <Group>
          <Group4>
            <Button1 onClick={(e) => Button1Function(e, "Button1")}>
              <Text8>Exchange Now</Text8>
              <Riarrowrightline
                src={`https://file.rendit.io/n/j4SFzoRJ2sabNpoDkjqt.svg`}
              />
            </Button1>
            <Group5>
              <Text9>Learn More</Text9>
              <Riarrowrightline
                src={`https://file.rendit.io/n/8qkHQbvjfmOH7go5NqsM.svg`}
              />
            </Group5>
          </Group4>
          <WhiteFlexColumn5>
            <Text10>
              You can now borrow form just <Text11>0%</Text11>
              <Text12> APR</Text12>
            </Text10>
          </WhiteFlexColumn5>
        </Group>
      </Group8>
    </FrameRootRootRoot>
  );
};

const WhiteFlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8.5px 32px;
  border-radius: 10px;
  background-color: #f0f0f3;
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
const Group = styled.div`
  width: 786px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const Riarrowrightline = styled.img`
  width: 20px;
  height: 20px;
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
  padding: 8.5px 30.5px;
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
const Text4 = styled.div`
  width: 44px;
  height: 15px;
  font-size: 12px;
  font-weight: 700;
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
const Group8 = styled.div`
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 0px 42px 0px;
`;
const Group2 = styled.div`
  height: 179px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  width: 568px;
  height: 39px;
  margin: 0px 0px 26px 0px;
  font-size: 31.3px;
  font-weight: 600;
  font-family: Sora;
  text-transform: capitalize;
`;
const Paragraph = styled.div`
  width: 467px;
  height: 78px;
  font-size: 14px;
  font-family: Plus Jakarta Sans;
  line-height: 26.25px;
  letter-spacing: 0.98px;
`;
const WhiteFlexColumn4 = styled.div`
  width: 75.7px;
  height: 129px;
  position: relative;
  gap: 2.25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 0px 11px 0px;
  padding: 11px 10.3px 11px 22px;
  border-radius: 13px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const Logosethereum = styled.img`
  width: 37.3px;
  height: 42.2px;
  left: 15px;
  top: 31px;
  position: absolute;
`;
const Logosbitcoin = styled.img`
  width: 50.7px;
  height: 50.7px;
  position: relative;
  align-self: flex-end;
`;
const Group3 = styled.div`
  width: 61px;
  height: 69px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 13.8px 0px 1px;
`;
const Phwalletfill = styled.img`
  width: 60px;
  height: 60px;
  left: 0px;
  top: 0px;
  position: absolute;
`;
const BlueRectangle = styled.div`
  width: 61px;
  height: 41px;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 85, 255, 0.16);
  backdrop-filter: blur(1px);
`;
const Group4 = styled.div`
  gap: 26.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 0px 17px 0px;
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
const Group5 = styled.div`
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
const WhiteFlexColumn5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 18px 24px 17px 25px;
  border-radius: 13px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const Text10 = styled.div`
  width: 194px;
  height: 50px;
  font-size: 14px;
  font-family: Sora;
  line-height: 25.41000247001648px;
  text-align: center;
  text-transform: capitalize;
`;
const Text11 = styled.div`
  display: contents;
  font-size: 14px;
  font-weight: 700;
  font-family: Sora;
  line-height: 25.41000247001648px;
  text-transform: capitalize;
`;
const Text12 = styled.div`
  display: contents;
  font-size: 14px;
  font-family: Sora;
  line-height: 25.41000247001648px;
  text-transform: capitalize;
`;
