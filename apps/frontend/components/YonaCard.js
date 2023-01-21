import React from "react";
import styled from "styled-components";

export const FrameRootRootRoot5 = ({}) => {
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
        <WhiteFlexColumn3>
          <Text4>Borrow</Text4>
        </WhiteFlexColumn3>
        <WhiteFlexRow>
          <Element1 />
          <Text5>Yona Card</Text5>
        </WhiteFlexRow>
      </Group6>
      <Line>
        <Line1 />
      </Line>
      <Group7>
        <Text6>THE RIGHT PLACE TO</Text6>
        <WhiteFlexColumn4>
          <Image1 src={`https://file.rendit.io/n/vaeNblV6ypFVVoYifiz6.svg`} />
          <Logo1>
            <Image2 src={`https://file.rendit.io/n/We3Czyn7voTIHk4A9g8X.svg`} />
            <Text7>Akila</Text7>
          </Logo1>
          <Image3 src={`https://file.rendit.io/n/7QUnkWbbTnukGpggcG2r.svg`} />
        </WhiteFlexColumn4>
        <Group>
          <Text8>Get a Crypto Card</Text8>
          <Group1>
            <Group2>
              <Paragraph>
                Spend without selling your digital assets with the Aqila Card
                and get up to 2% back on every purchase. All your expenses are
                financed by a credit line, starting at 0% APR.
              </Paragraph>
              <Group4>
                <Button1 onClick={(e) => Button1Function(e, "Button1")}>
                  <Text9>Exchange Now</Text9>
                  <Riarrowrightline
                    src={`https://file.rendit.io/n/lCDHeHHdGaL3dtQ8cKwU.svg`}
                  />
                </Button1>
                <Group5>
                  <Text10>Learn More</Text10>
                  <Riarrowrightline
                    src={`https://file.rendit.io/n/IwF06cc5faHm54V6W1Na.svg`}
                  />
                </Group5>
              </Group4>
            </Group2>
            <Group3>
              <WhiteFlexColumn5>
                <Image4
                  src={`https://file.rendit.io/n/AwdJ9yYZOZ7hkGzTHDUe.svg`}
                />
                <Element2 />
              </WhiteFlexColumn5>
              <WhiteFlexColumn6>
                <Text11>Up to 2%</Text11>
                <Text12>In crypto Rewards</Text12>
              </WhiteFlexColumn6>
            </Group3>
          </Group1>
        </Group>
      </Group7>
    </FrameRootRootRoot>
  );
};

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
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
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
  background-color: var(--primary-background);
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
const WhiteFlexColumn3 = styled.div`
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
const WhiteFlexRow = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 8.5px 22.5px;
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
const Text5 = styled.div`
  width: 60px;
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
const Group7 = styled.div`
  width: 689px;
  height: 260px;
  position: relative;
  gap: 21px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 36px 0px 0px 0px;
  padding: 23px 97px 17px 0px;
`;
const Text6 = styled.div`
  width: 171px;
  height: 15px;
  position: relative;
  color: #0055ff;
  font-size: 12px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
  letter-spacing: 2.94px;
`;
const WhiteFlexColumn4 = styled.div`
  height: 247px;
  left: 568px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 27px 22.5px 26.4px 20px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Image1 = styled.img`
  width: 48px;
  height: 48px;
  margin: 0px 0px 56px 0px;
`;
const Logo1 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 75px 0px;
  padding: 0px 23.5px 0px 25px;
`;
const Image2 = styled.img`
  width: 39px;
  height: 28px;
  margin: 4.45px 0px 0px 0px;
`;
const Text7 = styled.div`
  width: 78px;
  height: 37px;
  font-size: 29px;
  font-weight: 700;
  font-family: Sora;
  white-space: nowrap;
`;
const Image3 = styled.img`
  width: 49.5px;
  height: 30.6px;
  align-self: flex-end;
`;
const Group = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text8 = styled.div`
  width: 568px;
  height: 39px;
  font-size: 31.3px;
  font-weight: 600;
  font-family: Sora;
  text-transform: capitalize;
`;
const Group1 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Group2 = styled.div`
  height: 185px;
  gap: 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;
const Paragraph = styled.div`
  width: 467px;
  height: 78px;
  font-size: 14px;
  font-family: Plus Jakarta Sans;
  line-height: 26.25px;
  letter-spacing: 0.98px;
`;
const Group4 = styled.div`
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
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text9 = styled.div`
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
const Text10 = styled.div`
  width: 86px;
  height: 20px;
  font-size: 16px;
  font-weight: 600;
  font-family: Plus Jakarta Sans;
  white-space: nowrap;
`;

const Group3 = styled.div`
  height: 185px;
  gap: 23px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const WhiteFlexColumn5 = styled.div`
  width: 45px;
  height: 38px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 15px 12px 15px 11px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Image4 = styled.img`
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
const WhiteFlexColumn6 = styled.div`
  width: 131px;
  height: 55px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 15px 41px 15px 40px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Text11 = styled.div`
  width: 84px;
  height: 33px;
  left: 63px;
  top: 15px;
  position: absolute;
  color: #0055ff;
  font-size: 18px;
  font-weight: 700;
  font-family: Sora;
  line-height: 32.670003175735474px;
  text-align: center;
  white-space: nowrap;
  text-transform: capitalize;
`;
const Text12 = styled.div`
  width: 131px;
  height: 25px;
  position: relative;
  font-size: 14px;
  font-family: Sora;
  line-height: 25.41000247001648px;
  text-align: center;
  white-space: nowrap;
  text-transform: capitalize;
`;
