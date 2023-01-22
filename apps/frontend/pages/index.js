import { useRouter } from "next/router";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Moment from "react-moment";
import styled from "styled-components";
import { v4 } from "uuid";
import { Button } from "../components/Common/Button";
import Divider from "../components/Common/Divider";
import { Ellipse } from "../components/Ellipse";
import Image from "../components/Image";
import IntroCard from "../components/MainPage/IntroCard";
import { FrameRoot } from "../components/MainPage/FrameRoot";
import { GroupRoot2 } from "../components/MainPage/GroupRoot2";
import Seo from "../components/Seo";
import Subtract from "../components/Subtract";
import Whitepaper from "../components/Whitepaper";
import {
  FeaturesContent,
  roadMapContent,
  technicalChar,
} from "../constant/index";
import { fetchAPI } from "../lib/api";
import { GroupRoot } from "../components/MainPage/GroupRoot";
import { GroupRoot3 } from "../components/MainPage/GroupRoot3";
import { ContentGroup } from "../components/Common/ContentGroup";

export async function getServerSideProps() {
  const articlesRes = await fetchAPI("/articles", {
    populate: ["cover", "categories"],
    sort: "publishedAt:desc",
    pagination: { withCount: true, limit: 3 },
  });

  if (!articlesRes?.data?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: { recentArticle: articlesRes.data },
  };
}

const Home = ({ recentArticle }) => {
  const [selectRoadMap, setSelectRoadMap] = useState(0);
  const { push } = useRouter();
  const Button1Function = (e, name) => {};
  const Button2Function = (e, name) => {};
  const articleOnClick = (e, slug) => {
    push(`blog/${slug}`);
  };
  return (
    <HomeRoot>
      <Seo />
      <Header>
        <Element39>
          <Body>
            <Paragraph>
              ___ An open, permissionless, decentralized crypto banking platform
            </Paragraph>
            <Title>
              <Text9>One Platform to</Text9>
              <Text8>Power Smart Future</Text8>
            </Title>
            <Paragraph1>
              Supporting a more decentralized future Grow your wealth and let it
              be secured with <LogoTextPer>Akila</LogoTextPer>
              <LogoTextSec>Banq</LogoTextSec>
            </Paragraph1>
          </Body>
          <Design>
            <Icons alt="btc eth" src={"./assets/icon/iPhone.svg"} />
          </Design>
        </Element39>
        <IntroCard />
      </Header>
      <GroupRoot2 />
      <FrameRoot />
      <GroupRoot />
      <GroupRoot3
        content={
          <ContentGroup
            title={"Akila Blockchain"}
            label={"(Akila Chain)"}
            desc={
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
          />
        }
      />

      <Roadmap>
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
      </Roadmap>
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
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1.4;
  gap: var(--x5);
`;
const Line1 = styled(LazyLoadImage)``;
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
  display: flex;
  justify-content: center;
  align-items: end;
  @media (max-width: 1124px) {
    display: none;
  }
`;
const Element40 = styled.div`
  border-width: 1px;
  border-color: var(--borders);
  border-style: solid;
  width: 198px;
  height: 550px;
  border-radius: 999px 999px 0px 0px;
  position: relative;
`;
const Icons = styled(LazyLoadImage)`
  width: 100%;
`;
const Height2 = styled.div`
  display: flex;
  background: var(--primary-background);
  color: var(--text-primary);
  align-self: flex-start;
  box-shadow: var(--box-shadow);
  width: 151px;
  height: 52px;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 30px 30px 30px 0px;
  padding: 12px 27px;
  white-space: pre-wrap;
  position: absolute;
  right: -64px;
`;
const WhiteText = styled.div`
  display: flex;
  background: var(--primary-background);
  box-shadow: var(--box-shadow);
  width: 458px;
  height: 52px;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 30px 30px 0px 30px;
  padding: var(--x4);
  top: 150px;
  left: -400px;
  position: absolute;
  font-size: 14px;
`;
const SpecialOffer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: -128px;
  justify-content: center;
`;
const Element41 = styled.div`
  align-self: stretch;
  position: relative;
  flex: 1.1;
`;
const Texts1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  justify-content: center;
  align-items: flex-start;
`;
const Text13 = styled.h1`
  font-size: 43px;
  font-weight: 500;
  line-height: 68.37px;
  text-transform: capitalize;
  color: var(--text-primary);
`;

const Paragraph3 = styled.p`
  width: 360px;
  font-size: 16px;
  font-weight: 300;
  line-height: 27.57px;
  color: var(--text-secondary);
`;
const Button2 = styled(Button)`
  width: 177px;
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 91px;
  padding: 4px 24px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
`;
const Text15 = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary-color);
`;
const LogoTextSec = styled.span`
  color: var(--text-secondary-color);
`;
const LogoTextPer = styled.span`
  color: var(--text-primary-color);
`;
const Rishoppingcartline = styled(LazyLoadImage)`
  width: 18px;
  height: 18px;
`;
const Bg = styled.div`
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--box-shadow);
  padding: 32px;
  max-width: 570px;
  border-radius: 10px;
  width: 100%;
  position: relative;
  background: var(--primary-background);
`;
const Text16 = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary-color);
`;
const WhiteFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  border-radius: 15px;
  padding: 19px 33px 15px 42px;
  margin: 0px 0px 17px 0px;
`;
const Element11 = styled.div`
  white-space: pre-wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const Text21 = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-secondary-color);
`;
const Cap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Top1 = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const WhiteFlexRow = styled.div`
  box-shadow: var(--box-shadow);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 999px;
`;
const BlueFlexRow = styled.div`
  width: 70px;
  background-color: var(--primary);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 999px;
  padding: 0px 46px;
`;
const Cont = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 7.5px;
  align-items: center;
  padding: 0px 0.1px;
`;
const Text24 = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  align-self: center;
  margin: 5px 0px 0px 0px;
`;
const Buttom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text1 = styled.div`rgba(240, 240, 243, 0.79)
  display: flex;
  flex-direction: row;
  gap: 19px;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 690px) {
    flex-direction: column;
  }
`;
const Paragraph4 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 27.97px;
  text-transform: capitalize;
  color: var(--text-primary);
  flex: 2;
`;
const Features = styled.div`
  display: flex;
  flex-direction: row;
  gap: 33px;
  justify-content: center;
  flex-wrap: wrap;
`;
const Section1 = styled(Subtract)`
  display: flex;
  flex-direction: row;
  gap: 58px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
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
const Text52 = styled.p`
  text-align: center;
  display: flex;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.46px;
  color: var(--text-primary);
`;
const Title6 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: start;
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
const Posts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
const Brands = styled.div`
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

const Topbar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
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
const Element1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: ${(props) => props.gap};
  flex-wrap: wrap;
`;
const Element22 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: ${(props) => props.gap};
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Text10 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
`;

const Height = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  display: contents;
  white-space: pre-wrap;
  color: ${(props) => props.color};
`;
const Element5 = styled.p`
  font-size: 26px;
  font-weight: 600;
  line-height: 36.4px;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

const ContributionReceived = styled.p`
  font-weight: 300;
  color: var(--text-primary);
  display: contents;
  white-space: pre-wrap;
  font-size: ${(props) => props.fontSize};
`;
const Text22 = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
`;
const SoftcapInDays1 = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  white-space: pre-wrap;
  text-align: ${(props) => props.textAlign};
`;
const Text26 = styled.div`
  font-size: 23px;
  line-height: 38.06px;
  flex: 1;
  text-transform: capitalize;
  color: var(--primary);
  display: ${(props) => props.display};
`;
const Text27 = styled.p`
  font-size: 23px;
  font-weight: 600;
  line-height: 38.06px;
  text-transform: capitalize;
  color: var(--text-primary);
  display: contents;
  white-space: pre-wrap;
`;
const FlexColumn = styled(Subtract)`
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: start;
  flex-grow: 1;
  align-items: start;
  padding: 27px;
  min-height: 504px;
  flex: 1 1 341px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  justify-content: center;
  align-items: center;
`;
const WhiteFlexColumn1 = styled.div`
  box-shadow: var(--box-shadow);
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0px 13px 0px 14px;
`;
const Riawardline = styled(LazyLoadImage)`
  width: 28px;
  height: 28px;
`;
const Text30 = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 28.89px;
  text-transform: capitalize;
  color: var(--text-primary);
`;
const Paragraph5 = styled.p`
  width: auto;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: -0.42px;
  line-height: 25.69px;
  color: var(--text-secondary);
  margin: 0px 0px 8px 0px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Icon6 = styled(LazyLoadImage)`
  width: 223px;
  height: 223px;
`;
const WhatIsAkilaChain2 = styled.h1`
  font-size: 25px;
  font-weight: 600;
  line-height: 33.08px;
  text-transform: capitalize;
  color: var(--text-primary);
  white-space: pre-wrap;
`;
const WhatIsAkilaChain = styled.span`
  font-size: 25px;
  line-height: 33.08px;
  text-transform: capitalize;
  display: contents;
  color: ${(props) => props.color};
`;
const Paragraph11 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 22.77px;
  color: var(--text-secondary);
`;
const Element19 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
  flex: 1;
`;
const Dots = styled(LazyLoadImage)`
  width: 6px;
  height: 66px;
`;
const Paragraph12 = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 29.09px;
  text-transform: capitalize;
  color: var(--text-primary);
`;
const Text37 = styled.p`
  font-size: 25px;
  text-decoration: underline;
  font-weight: 300;
  line-height: 33.08px;
  text-transform: capitalize;
  color: var(--text-secondary-color);
  display: contents;
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
const No2 = styled.div`
  width: 61px;
  height: 61px;
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
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
const RoadMap = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 39.69px;
  text-transform: capitalize;
  color: var(--text-primary);
  white-space: pre-wrap;
  display: ${(props) => props.display};
`;
const Paragraph17 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 26.39px;
  color: var(--text-primary);
`;
const Picture = styled.div`
  width: 339px;
  height: 526px;
  position: relative;
`;
const WhiteFlexColumn7 = styled.div`
  box-shadow: var(--box-shadow);
  max-height: 295px;
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
  top: 228px;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  padding: 0px 17px;
`;
const Text60 = styled.p`
  text-align: start;
  font-size: 18px;
  width: 100%;
  font-weight: 500;
  color: var(--primary);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Text61 = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-primary);
`;
const Paragraph20 = styled.p`
  width: 305px;
  height: 92px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21.06px;
  color: var(--text-secondary);
`;
const Button4 = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  align-self: flex-end;
`;
const Image1 = styled(Image)`
  width: 339px;
  height: 229px;
  position: absolute;
  border-radius: 10px 10px 0 0;
`;
const WhiteRectangle = styled.div`
  box-shadow: var(--box-shadow);
  width: 184px;
  height: 62px;
  border-radius: 5px;
`;

const CustomEllipse = styled(Ellipse)`
  position: absolute;
  right: 0;
`;
const CustomEllipse2 = styled(Ellipse)`
  width: 223px;
  height: 223px;
  position: absolute;
  left: -102px;
  top: -100px;
`;

const ParentCircle = styled.div`
  display: flex;
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  justify-content: space-around;
  padding: 0px 12px;
`;

const Circle = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border-radius: 50%;
  background: #f0f0f3;
  box-shadow: inset 3px 0px 13px #dfdfdf, inset 0px 0px 0px #f2f2f5;
`;
