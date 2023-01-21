import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

const Borrow = () => {
  return (
    <Group4>
      <WhiteFlexColumn4>
        <Logosethereum src={`./assets/icon/logos_ethereum.svg`} />
        <Logosbitcoin src={`./assets/icon/logos_bitcoin.svg`} />
        <Group3>
          <Phwalletfill src={`./assets/icon/ph_wallet-fill.svg`} />
        </Group3>
      </WhiteFlexColumn4>
      <WhiteFlexColumn5>
        <Text10>
          You can now borrow form just <Text11>0%</Text11>
          <Text12> APR</Text12>
        </Text10>
      </WhiteFlexColumn5>
    </Group4>
  );
};

export default Borrow;

const Group4 = styled.div`
  gap: 23px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 100%;
`;

const WhiteFlexColumn4 = styled.div`
  position: relative;
  width: 108px;
  height: 155px;
  gap: 2.25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  padding: 16px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
`;
const Logosethereum = styled(LazyLoadImage)`
  left: 10px;
  top: 35px;
  position: absolute;
`;
const Logosbitcoin = styled(LazyLoadImage)`
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
const Phwalletfill = styled(LazyLoadImage)`
  left: 0px;
  top: 0px;
  position: absolute;
`;
const WhiteFlexColumn5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 18px 24px 17px 25px;
  border-radius: 13px;
  background-color: var(--primary-background);
  box-shadow: var(--box-shadow);
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