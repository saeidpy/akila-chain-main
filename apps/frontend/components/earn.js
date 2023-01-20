import React from "react";
import styled from "styled-components";

export const GroupRootRootRootRoot1 = ({}) => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <GroupRootRootRootRoot>
      <WhiteFlexColumn>
        <Ellipse src={`https://file.rendit.io/n/K02AClnSnXLIPX8kIHW3.svg`} />
        <WhiteFlexRow>
          <Group>
            <WhiteFlexColumn1>
              <Text1>Buy</Text1>
            </WhiteFlexColumn1>
            <WhiteFlexRow1>
              <Element1 />
              <Text2>Earn</Text2>
            </WhiteFlexRow1>
            <WhiteFlexColumn2>
              <Text3>Exchange</Text3>
            </WhiteFlexColumn2>
            <WhiteFlexColumn3>
              <Text4>Borrow</Text4>
            </WhiteFlexColumn3>
            <WhiteFlexColumn2>
              <Text3>YonaCard</Text3>
            </WhiteFlexColumn2>
          </Group>
          <Line>
            <Line1 />
          </Line>
          <Group1>
            <Paragraph>
              Earn daily interest on your digital assets. Top up and start
              growing your wealth automatically without having to do anything
              yourself.
            </Paragraph>
            <Group2>
              <Group4>
                <Text6>THE RIGHT PLACE TO</Text6>
                <Text7>Grow Your Passive Income</Text7>
              </Group4>
              <Group5>
                <Button1 onClick={(e) => Button1Function(e, "Button1")}>
                  <Text8>Start Earning</Text8>
                  <Riarrowrightline
                    src={`https://file.rendit.io/n/Ci3aCK4zCekDYii2nLNu.svg`}
                  />
                </Button1>
                <Group6>
                  <Text9>Learn More</Text9>
                  <Riarrowrightline
                    src={`https://file.rendit.io/n/1MHYAhbmEBFZTPg0K7hL.svg`}
                  />
                </Group6>
              </Group5>
            </Group2>
            <Group3>
              <WhiteFlexColumn5>
                <WhiteFlexColumn6>
                  <Text10>Crypto Asset</Text10>
                  <Group8>
                    <Logosbitcoin
                      src={`https://file.rendit.io/n/vTEhyP7r9bUCsroqhI9n.svg`}
                    />
                    <Text11>Bitcoin</Text11>
                  </Group8>
                </WhiteFlexColumn6>
              </WhiteFlexColumn5>
              <Group7>
                <WhiteFlexColumn7>
                  <Phpercent
                    src={`https://file.rendit.io/n/n0mfrbjBf9iInBShLuN0.svg`}
                  />
                </WhiteFlexColumn7>
                <WhiteFlexColumn8>
                  <Group9>
                    <Phmoneyfill
                      src={`https://file.rendit.io/n/bCIAZMLsoSN0VhhjUfp4.svg`}
                    />
                    <BlueRectangle />
                  </Group9>
                  <Group10>
                    <Text12>$858.85</Text12>
                    <Text13>Earned Today</Text13>
                  </Group10>
                </WhiteFlexColumn8>
              </Group7>
              <WhiteFlexColumn9>
                <Text14>Top Up Amount</Text14>
                <Text15>$10,000</Text15>
              </WhiteFlexColumn9>
            </Group3>
          </Group1>
        </WhiteFlexRow>
      </WhiteFlexColumn>
      <Ellipse1 src={`undefined`} />
    </GroupRootRootRootRoot>
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
const Riarrowrightline = styled.img`
  width: 20px;
  height: 20px;
`;
const GroupRootRootRootRoot = styled.div`
  width: 1088px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const WhiteFlexColumn = styled.div`
  width: 1088px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 26px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
  overflow: hidden;
`;
const Ellipse = styled.img`
  width: 41px;
  height: 348px;
  left: 1047px;
  top: 30px;
  position: absolute;
`;
const WhiteFlexRow = styled.div`
  width: 1046px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 21px;
  background-color: rgba(240, 240, 243, 0.79);
  backdrop-filter: blur(110px);
`;
const Group = styled.div`
  gap: 35.3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 42px 0px 0px;
  padding: 36px 0px 41px 0px;
`;
const WhiteFlexColumn1 = styled.div`
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
const WhiteFlexRow1 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 8.5px 39.5px;
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
const Text2 = styled.div`
  width: 26px;
  height: 15px;
  font-size: 12px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  text-align: center;
  white-space: nowrap;
`;
const WhiteFlexColumn3 = styled.div`
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
const Group1 = styled.div`
  width: 809px;
  position: relative;
  gap: 42px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 22px 0px 52px 0px;
`;
const Paragraph = styled.div`
  width: 479px;
  height: 78px;
  left: 0px;
  top: 155px;
  position: absolute;
  font-size: 14px;
  font-family: Plus Jakarta Sans;
  line-height: 26.25px;
  letter-spacing: 0.98px;
`;
const Group2 = styled.div`
  height: 260px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 37px 0px 7px 0px;
`;
const Group4 = styled.div`
  gap: 21px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text6 = styled.div`
  width: 171px;
  height: 15px;
  color: #0055ff;
  font-size: 12px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
  letter-spacing: 2.94px;
`;
const Text7 = styled.div`
  width: 423px;
  height: 39px;
  font-size: 31.3px;
  font-weight: 600;
  font-family: Sora;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Group5 = styled.div`
  width: 423px;
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
  padding-right: 27.5px;
  padding-bottom: 16px;
  padding-left: 27.5px;
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
  width: 100px;
  height: 20px;
  color: #0055ff;
  font-size: 16px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
`;
const Group6 = styled.div`
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
const Group3 = styled.div`
  width: 344px;
  height: 304px;
  position: relative;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const WhiteFlexColumn5 = styled.div`
  height: 95px;
  left: 16px;
  top: 167px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 21px 20px 21px 147px;
  border-radius: 13px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const WhiteFlexColumn6 = styled.div`
  gap: 9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 46px 17.4px 19px;
  border-radius: 11px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const Text10 = styled.div`
  width: 70px;
  height: 18px;
  font-size: 11px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 17.655001521110535px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Group8 = styled.div`
  height: 23.6px;
  gap: 7.37px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Logosbitcoin = styled.img`
  width: 23.6px;
  height: 23.6px;
`;
const Text11 = styled.div`
  width: 42px;
  height: 19px;
  margin: 2px 0px 0px 0px;
  font-size: 12px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  line-height: 19.26000165939331px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Group7 = styled.div`
  width: 344px;
  position: relative;
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;
const WhiteFlexColumn7 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 14px;
  border-radius: 13px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const Phpercent = styled.img`
  width: 40px;
  height: 40px;
`;
const WhiteFlexColumn8 = styled.div`
  height: 154px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 14px 53px 14px 24px;
  border-radius: 13px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const Group9 = styled.div`
  width: 45px;
  height: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 68px 0px 0px;
`;
const Phmoneyfill = styled.img`
  width: 40px;
  height: 40px;
  left: 3px;
  top: 0px;
  position: absolute;
`;
const BlueRectangle = styled.div`
  width: 45px;
  height: 30px;
  position: relative;
  border-radius: 2px;
  background-color: rgba(0, 85, 255, 0.16);
  backdrop-filter: blur(1px);
`;
const Group10 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text12 = styled.div`
  width: 113px;
  height: 43px;
  font-size: 27px;
  font-weight: 600;
  font-family: Sora;
  line-height: 43.33500373363495px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text13 = styled.div`
  width: 98px;
  height: 24px;
  margin: 0px 0px 0px 1px;
  font-size: 15px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 24.075002074241638px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const WhiteFlexColumn9 = styled.div`
  height: 55px;
  position: relative;
  gap: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 38px 13px 30px;
  border-radius: 11px;
  background-color: #f0f0f3;
  box-shadow: 5px 5px 15px 0px rgba(174, 174, 192, 0.7),
    -5px -5px 15px 0px #ffffff;
`;
const Text14 = styled.div`
  width: 81px;
  height: 18px;
  font-size: 11px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  line-height: 17.655001521110535px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text15 = styled.div`
  width: 51px;
  height: 19px;
  font-size: 12px;
  font-weight: 700;
  font-family: Plus Jakarta Sans;
  line-height: 19.26000165939331px;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Ellipse1 = styled.img`
  height: 0px;
  left: 402px;
  top: -159px;
  position: absolute;
`;
