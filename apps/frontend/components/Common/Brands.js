import React from "react";
import styled from "styled-components";
import { Ellipse } from "./Ellipse";

function Brands() {
  return (
    <BrandsEl>
      <Head7>
        <Ellipse16>
          <Bg4 />
        </Ellipse16>
        <Title12>
          <RoadMapEl display={"block"}>
            Where To Trade <Text67 href="/">Akila Chain</Text67>
            <RoadMapEl display={"contents"}> Coin</RoadMapEl>
          </RoadMapEl>
          <Paragraph23>
            Akila Chain is listed in various popular crypto exchange
          </Paragraph23>
        </Title12>
      </Head7>
      <Element1 gap={"29px"}>
        {[0, 1, 2, 3, 4].map((item) => (
          <WhiteRectangle key={item} />
        ))}
      </Element1>
    </BrandsEl>
  );
}

export default Brands;
const WhiteRectangle = styled.div`
  box-shadow: var(--box-shadow);
  width: 184px;
  height: 62px;
  border-radius: 5px;
`;
const BrandsEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 67px;
  justify-content: center;
  align-items: center;
`;
const Head7 = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const Bg4 = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: var(--primary);
  position: absolute;
  right: 0;
`;
const Ellipse16 = styled(Ellipse)`
  width: 112px;
  height: 112px;
  position: absolute;
  top: -20px;
  left: -70px;
`;
const Title12 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  justify-content: flex-start;
  align-items: start;
`;
const Text67 = styled.p`
  font-size: 30px;
  text-decoration: underline;
  line-height: 39.69px;
  text-transform: capitalize;
  color: var(--primary);
  display: contents;
  cursor: pointer;
`;
const Paragraph23 = styled.p`
  font-size: 16.5px;
  font-weight: 300;
  line-height: 21.83px;
  color: var(--text-secondary);
`;

const Element1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: ${(props) => props.gap};
  flex-wrap: wrap;
`;

const RoadMapEl = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 39.69px;
  text-transform: capitalize;
  color: var(--text-primary);
  white-space: pre-wrap;
  display: ${(props) => props.display};
`;
