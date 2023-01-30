import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import Divider from "./Divider";
import { Ellipse } from "./Ellipse";

function RoadMap({ roadMapContent, title = "The Proccess Of ICO Program" }) {
  const [selectRoadMap, setSelectRoadMap] = useState(0);

  return (
    <Roadmap>
      <Head6>
        <Ellipse9 />
        <Title1>
          <RoadMap1>
            road<RoadMapEl display={"contents"}> map</RoadMapEl>
          </RoadMap1>
          <Text55>{title}</Text55>
        </Title1>
      </Head6>
      <Element42>
        <TopbarRoadMap gap={"15px"}>
          {roadMapContent?.map((item, index) => (
            <>
              <Nav>
                <No1
                  onClick={() => setSelectRoadMap(index)}
                  selected={selectRoadMap === index}
                >
                  <Text40>{index + 1}</Text40>
                </No1>
                <Title2>
                  <Text41>{item.name}</Text41>
                  <Text42>{item.date}</Text42>
                </Title2>
              </Nav>
              {roadMapContent.length !== index + 1 && (
                <RoadMapDivider
                  isVertical
                  height="26px"
                  color="rgba(0, 0, 0, 0.5)"
                />
              )}
            </>
          ))}
        </TopbarRoadMap>
        {roadMapContent?.[selectRoadMap] && (
          <Content3>
            <Topbar gap={"2px"}>
              <Text56>{roadMapContent[selectRoadMap].date}</Text56>
              <Text57>{roadMapContent[selectRoadMap].name}</Text57>
            </Topbar>
            <Topbar gap={"11px"}>
              <Paragraph17>
                {roadMapContent[selectRoadMap].description}
              </Paragraph17>
            </Topbar>
          </Content3>
        )}
      </Element42>
    </Roadmap>
  );
}

export default RoadMap;

const Paragraph17 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 26.39px;
  color: var(--text-primary);
`;

const Topbar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
`;

const Content3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: flex-start;
  align-items: start;
`;
const Text56 = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21.17px;
  text-transform: uppercase;
  color: var(--text-secondary);
`;
const Text57 = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 23.81px;
  text-transform: uppercase;
  color: var(--text-primary);
`;

const RoadMapDivider = styled(Divider)`
  margin-left: 30px;
`;
const Text40 = styled.p`
  text-align: center;
  display: flex;
  font-size: 20px;
  font-weight: 500;
  line-height: 26.46px;
`;
const Roadmap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const TopbarRoadMap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
  flex: 1;
  border-right: 1px solid var(--borders);
  padding-right: 32px;
  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--borders);
    margin-top: 0px;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding-right: 0px;
    padding-bottom: 32px;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Head6 = styled.div`
  position: relative;
  margin: 0 35% auto;
  @media (max-width: 1024px) {
    margin: unset;
  }
`;
const Ellipse9 = styled(Ellipse)`
  width: 112px;
  height: 112px;
`;
const Title1 = styled.div`
  width: 234px;
  height: 70.5px;
  position: absolute;
  top: 26px;
  left: 58px;
`;
const RoadMap1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 39.69px;
  text-transform: capitalize;
  color: var(--primary);
`;
const Text55 = styled.p`
  font-size: 16.5px;
  font-weight: 300;
  line-height: 21.83px;
  color: var(--text-secondary);
`;

const Element42 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  gap: 64px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const No1 = styled(Button)`
  min-width: 61px;
  min-height: 61px;
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background: ${({ selected }) =>
    selected && "linear-gradient(180deg, #fe983f 0%, #ff551f 100%)"};
  color: ${({ selected }) => (selected ? "#fff" : "var(--text-primary)")};
  box-shadow: var(--box-shadow);
`;
const Title2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
`;
const Text41 = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.17px;
  text-transform: uppercase;
  color: var(--text-primary);
`;
const Text42 = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 18.52px;
  text-transform: uppercase;
  color: var(--text-secondary);
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
