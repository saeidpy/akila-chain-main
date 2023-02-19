import React from "react";
import styled from "styled-components";
import { FeatureSection } from "../components/MainPage/FeatureSection";
import { FrameRoot } from "../components/MainPage/FrameRoot";
import { GroupRoot } from "../components/MainPage/GroupRoot";
import { GroupRoot2 } from "../components/MainPage/GroupRoot2";
import IntroCard from "../components/MainPage/IntroCard";
import Seo from "../components/Seo";
import Image from "next/image";
import { IPHONE_SVG } from "../assets/static";
import { fetchAPI } from "../lib/api";
import RoadMap from "../components/Common/RoadMap";
import { Trans } from "@lingui/react";

export async function getServerSideProps() {
  const featuresRes = await fetchAPI("/feature", {
    populate: "*",
  });
  const roadMap = await fetchAPI("/platform-road-maps", {
    populate: ["*"],
  });

  return {
    props: {
      featuresRes: featuresRes?.data ?? {},
      roadMap: roadMap?.data ?? [],
    },
  };
}

const seo = {
  meta_title: "Akila",
  meta_description: "One Platform To Power Smart Future",
};

const Home = ({ featuresRes, roadMap }) => {
  const roadMapContent = roadMap?.map((item) => item?.["attributes"]);

  return (
    <HomeRoot>
      <Seo seo={seo} />
      <Header>
        <Element39>
          <Body>
            <Paragraph>
              <Trans
                id="___ An open, permissionless, decentralized crypto banking
                platform"
              />
            </Paragraph>
            <Title>
              <Text9>
                <Trans id="One Platform to" />
              </Text9>
              <Text8>
                <Trans id="Power Smart Future" />
              </Text8>
            </Title>
            <Paragraph1>
              <Trans
                id="Supporting a more decentralized future Grow your wealth and let it
              be secured with "
              />
              <LogoTextPer>Akila</LogoTextPer>
              <LogoTextSec>Banq</LogoTextSec>
            </Paragraph1>
          </Body>
          <Design>
            <Image effect="opacity" alt="Iphone" src={IPHONE_SVG} />
          </Design>
        </Element39>
      </Header>
      <IntroCard />
      {/* <GroupRoot2 /> */}
      <FrameRoot />
      <GroupRoot />
      {roadMapContent?.length ? (
        <RoadMap roadMapContent={roadMapContent} />
      ) : (
        ""
      )}
      <FeatureSection featuresRes={featuresRes} />

      {/* <Roadmap>
        <Head6>
          <Ellipse9 />
          <Title1>
            <RoadMap1>
              road<RoadMap display={"contents"}> map</RoadMap>
            </RoadMap1>
            <Text55>The Proccess Of ICO Program</Text55>
          </Title1>
        </Head6>
        <Element42>
          <TopbarRoadMap gap={"15px"}>
            {roadMapContent.map((item, index) => (
              <>
                <Nav>
                  <No1
                    onClick={(e) => setSelectRoadMap(index)}
                    selected={selectRoadMap === index}
                  >
                    <Text40>{index + 1}</Text40>
                  </No1>
                  <Title2>
                    <Text41>{item.title}</Text41>
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
          <Content3>
            <Topbar gap={"2px"}>
              <Text56>{roadMapContent[selectRoadMap].date}</Text56>
              <Text57>{roadMapContent[selectRoadMap].title}</Text57>
            </Topbar>
            <Topbar gap={"11px"}>
              <Paragraph17>{roadMapContent[selectRoadMap].content}</Paragraph17>
            </Topbar>
          </Content3>
        </Element42>
      </Roadmap> */}
    </HomeRoot>
  );
};

export default Home;

const HomeRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  width: 100%;
  gap: 100px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 77px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;
const Element39 = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--x5);
  max-width: 50%;
  @media (max-width: 1124px) {
    max-width: 100%;
  }
`;
const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  color: var(--text-secondary);
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text8 = styled.h1`
  font-size: 49px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--primary);
  white-space: pre-wrap;
  display: inline-block;
`;
const Text9 = styled.p`
  font-size: 49px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--text-primary);
  display: contents;
`;
const Paragraph1 = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 34.57px;
  color: var(--text-secondary);
`;
const Design = styled.div`
  position: absolute;
  right: 0;
  z-index: -1;
  @media (max-width: 1124px) {
    display: none;
  }
`;
const LogoTextSec = styled.span`
  color: var(--text-secondary-color);
`;
const LogoTextPer = styled.span`
  color: var(--text-primary-color);
`;
