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
import Seo from "../components/Seo";
import Subtract from "../components/Subtract";
import Whitepaper from "../components/Whitepaper";
import {
  FeaturesContent,
  roadMapContent,
  technicalChar,
} from "../constant/index";
import { fetchAPI } from "../lib/api";

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    populate: ["cover", "categories"],
    sort: "publishedAt:desc",
    pagination: { withCount: true, limit: 3 },
  });

  return {
    props: { recentArticle: articlesRes.data },
    revalidate: 1,
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
              ___ Meet a high secure and high speed decentralized platform
            </Paragraph>
            <Title>
              <CustomEllipse />
              <Text8>
                Tokenize The World{" "}
                <Text9>Redefining The Tokenization Economy</Text9>
              </Text8>
            </Title>
            <Paragraph1>
              AkilaCain is a Decentralized Public Blockchain Leveraging The
              Security of Bitcoin UTXO While Enabling Cognizant Protocol to
              Create, Store And Transfer Digital Assets From One Party To
              Another
            </Paragraph1>
            <Button1 onClick={(e) => Button1Function(e, "Button1")}>
              <Text10>Learn More</Text10>
              <Riarrowrightline
                alt="right arrow icon"
                src={"./assets/icon/rightArrow.svg"}
              />
            </Button1>
          </Body>
          <Design>
            <Element40>
              <Height2>
                <Height color={"rgba(0, 0,0, 0.7)"}>Height: </Height>
                <Height color={"#0055ff"}>917523</Height>
              </Height2>
              <WhiteText>
                Current Supply:
                {[
                  {
                    childText: " ",
                    color: "rgba(0, 0,0, 0.7)",
                  },
                  {
                    childText: "4,370,092",
                    color: "#0055ff",
                  },
                  {
                    childText: " Of 14,000,000 ( Total supply after 23 years )",
                    color: "rgba(0, 0,0, 0.7)",
                  },
                ].map((data) => (
                  <Height key={v4()} color={data.color}>
                    {data.childText}
                  </Height>
                ))}
              </WhiteText>
              <Icons alt="btc eth" src={"./assets/icon/BtcIcon.svg"} />
            </Element40>
          </Design>
        </Element39>
      </Header>
      <SpecialOffer>
        <Element41>
          <CustomEllipse2 />
          <Texts1>
            <Text13>
              Transforming
              <br />
              <Text14>
                The Tokenization Industry
                <br /> On Blockchain
              </Text14>
            </Text13>
            <Paragraph3>
              Integration of all the best of Blockchains in one platform.
              Create, Store and transfer tokens over Akila Blockchain. Join the
              revolutionary movement and don’t miss the opportunity.
            </Paragraph3>
            <Button2 onClick={(e) => Button2Function(e, "Button2")}>
              <Text15>Buy Tokens -25% off</Text15>
              <Rishoppingcartline
                alt="shopping cart icon"
                src={"./assets/icon/shoppingCart.svg"}
              />
            </Button2>
          </Texts1>
        </Element41>
        <Bg>
          {/* <ParentCircle>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </ParentCircle> */}
          <Text16>Token sale ends in</Text16>
          <WhiteFlexColumn>
            <Element11>
              {[
                {
                  childText: "0",
                  color: "#232323",
                },
                {
                  childText: ":",
                  color: "rgba(0, 0,0, 0.3)",
                },
                {
                  childText: "00",
                  color: "#232323",
                },
                {
                  childText: ":",
                  color: "rgba(0, 0,0, 0.3)",
                },
                {
                  childText: "00",
                  color: "#232323",
                },
                {
                  childText: ":",
                  color: "rgba(0, 0,0, 0.3)",
                },
                {
                  childText: "00",
                  color: "#232323",
                },
              ].map((data) => (
                <Element5 key={v4()} color={data.color}>
                  {data.childText}
                </Element5>
              ))}
            </Element11>
            <FlexRow>
              {[
                {
                  childText: "days",
                },
                {
                  childText: "hours",
                },
                {
                  childText: "minutes",
                },
                {
                  childText: "seconds",
                },
              ].map((data) => (
                <Text17 key={v4()}>{data.childText}</Text17>
              ))}
            </FlexRow>
          </WhiteFlexColumn>
          <Text21>
            $25,369,146
            <ContributionReceived fontSize={"16px"}>
              {" "}
              contribution received
            </ContributionReceived>
          </Text21>
          <Cap>
            <Top1>
              <Text22>$4m</Text22>
              <Text22>$55m</Text22>
            </Top1>
            <WhiteFlexRow>
              <BlueFlexRow>
                <Cont>
                  <Divider isVertical color="#fff" height={"25px"} />
                  <Text24>30%</Text24>
                </Cont>
              </BlueFlexRow>
            </WhiteFlexRow>
            <Buttom>
              <SoftcapInDays1 textAlign={"left"}>
                Softcap{" "}
                <ContributionReceived fontSize={"14px"}>
                  in 1035 days
                </ContributionReceived>
              </SoftcapInDays1>
              <SoftcapInDays1 textAlign={"right"}>Hardcap</SoftcapInDays1>
            </Buttom>
          </Cap>
        </Bg>
      </SpecialOffer>
      <CustomSubtract>
        <Text1>
          <Text26 display={"block"}>
            Bitcoin Core
            <Text27>
              {" "}
              + <br />
            </Text27>
            <Text26 display={"contents"}>Cognizant Protocol</Text26>
            <Text27>
              {" "}
              + <br />
            </Text27>
            <Text26 display={"contents"}>POS algorithm</Text26>
            <Text27> = AkilaChain</Text27>
          </Text26>
          <Paragraph4>
            AkilaChain is a Blockchain for tokenizing real-world assets.
            AkilaChain is an open-source blockchain that hosts several unique
            features. AkilaCain is a fully decentralized public blockchain with
            PoS algorithm and 20 seconds blocktime which can carry 1000
            transactions per seconds.
          </Paragraph4>
        </Text1>
      </CustomSubtract>
      <Features>
        {FeaturesContent.map((item) => (
          <FlexColumn key={v4()}>
            <Head>
              <WhiteFlexColumn1>
                <Riawardline
                  alt="riaward icon"
                  src={"./assets/icon/riaward.svg"}
                />
              </WhiteFlexColumn1>
              <Text30>{item.title}</Text30>
            </Head>
            <Paragraph5>{item.content}</Paragraph5>
          </FlexColumn>
        ))}
      </Features>
      <Section gap={"42px"}>
        <Icon6 alt="board icon" src={"./assets/icon/iconSection.svg"} />
        <Topbar gap={"33px"}>
          <WhatIsAkilaChain2>
            Technical Characteristics of{" "}
            <WhatIsAkilaChain color={"#fe762f"}>Akila Chain</WhatIsAkilaChain>?
          </WhatIsAkilaChain2>
          <Paragraph11>
            AkilaChain is a decentralized public blockchain and permissionless
            project for tokenizing real-world assets and is fully open source.
            Technical Characteristics of AkilaChain is as follow:
          </Paragraph11>
          <Element22 gap={"38px"}>
            <Element19 gap={"7px"}>
              <ul>
                {technicalChar.slice(0, 6).map((item) => (
                  <li key={item}>
                    <Paragraph12>{item}</Paragraph12>
                  </li>
                ))}
              </ul>
            </Element19>
            <Element19 gap={"7px"}>
              <ul>
                {technicalChar.slice(6).map((item) => (
                  <li key={item}>
                    <Paragraph12>{item}</Paragraph12>
                  </li>
                ))}
              </ul>
            </Element19>
          </Element22>
        </Topbar>
      </Section>
      <Section1>
        <Topbar gap={"29px"}>
          <WhatIsAkilaChain2>
            Usage of real-world <Text37>tokenization</Text37>
          </WhatIsAkilaChain2>
          <Paragraph11>
            Token-based assets are rapidly gaining widespread acceptance. Real
            world asset tokenization has several uses and may be used to
            tokenize a broad range of assets, including real estate, art,
            collections, securities, equity, debts, goods, services, investment
            funds, firms, litigation and intangible assets.
          </Paragraph11>
        </Topbar>
        <Icon6 alt="board icon" src={"./assets/icon/iconSection2.svg"} />
      </Section1>
      <Section gap={"58px"}>
        <Icon6 alt="board icon" src={"./assets/icon/iconSection3.svg"} />
        <Topbar gap={"23px"}>
          <WhatIsAkilaChain2>
            Fungible tokens and non-fungible <Text37>tokens (NFT)</Text37>
          </WhatIsAkilaChain2>
          <Paragraph11 width={"807px"}>
            The blockchain technology distinguishes between two states of
            existence; fungible tokens and non-fungible tokens.
            <br />
            Fungible tokens are divisible, identical, and replaceable by another
            identical item, such as general admission concert tickets or loyalty
            points. If two parties have equal amounts, they can swap them
            without losing or gaining anything. Non-fungible, on the other hand,
            indicates a unique representation in that another item cannot
            replace it, creating a verifiable scarcity of the asset.
            <br />
            Stored within each token is individual metadata. The metadata within
            a token can include references to each token’s attributes such as
            information about possession.
            <br />
            AkilaChain supports creation of NFTs easily. The most interesting
            feature of AkilaChain is that all tokens have a unique name and no
            two tokens can have the same name.
          </Paragraph11>
        </Topbar>
      </Section>
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
      <Whitepaper />
      <Posts>
        {recentArticle?.map((article) => (
          <Picture key={article}>
            <WhiteFlexColumn7>
              <Topbar gap={"16px"}>
                <Topbar gap={"9px"}>
                  <Text60>{article?.attributes?.title}</Text60>
                  <Text61>
                    <Moment format="MMM D, YYYY">
                      {article?.attributes?.publishedAt}
                    </Moment>
                  </Text61>
                </Topbar>
                <Divider />
                <Paragraph20>{article?.attributes?.description}</Paragraph20>
              </Topbar>
              <Button4
                onClick={(e) => articleOnClick(e, article?.attributes?.slug)}
              >
                <Line1 alt="arrow icon" src="./assets/icon/arrowButton.svg" />
              </Button4>
            </WhiteFlexColumn7>
            <Image1 image={article?.attributes?.cover} />
          </Picture>
        ))}
      </Posts>
      <Brands>
        <Head7>
          <Ellipse16>
            <Bg4 />
          </Ellipse16>
          <Title12>
            <RoadMap display={"block"}>
              Where To Trade <Text67 href="/">Akila Chain</Text67>
              <RoadMap display={"contents"}> Coin</RoadMap>
            </RoadMap>
            <Paragraph23>
              Akila Chain is listed in various popular crypto exchange
            </Paragraph23>
          </Title12>
        </Head7>
        <Element1 gap={"29px"}>
          {[0, 1, 2, 3, 4].map((i) => (
            <WhiteRectangle key={v4()} />
          ))}
        </Element1>
      </Brands>
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
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1124px) {
    margin-bottom: 128px;
  }
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
  position: relative;
  width: 100%;
`;

const Text8 = styled.h1`
  font-size: 49px;
  font-weight: 500;
  line-height: 78.4px;
  text-transform: capitalize;
  color: var(--primary);
  white-space: pre-wrap;
  display: inline-block;
`;
const Text9 = styled.p`
  font-size: 49px;
  font-weight: 300;
  line-height: 78.4px;
  text-transform: capitalize;
  color: var(--text-primary);
  display: contents;
`;
const Paragraph1 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 27.57px;
  color: var(--text-secondary);
`;
const Design = styled.div`
  flex: 1;
  margin-top: 256px;
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
  height: 295px;
  top: 91px;
  position: absolute;
  left: -50px;
  top: 84px;
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
const Text14 = styled.p`
  font-size: 43px;
  font-weight: 300;
  line-height: 68.37px;
  text-transform: capitalize;
  color: var(--text-primary-color);
  display: contents;
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
const FlexRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
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
const CustomSubtract = styled(Subtract)``;
const Text1 = styled.div`
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

const Button1 = styled(Button)`
  height: 48px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 91px;
  padding: 4px 24px;
  box-sizing: content-box;
`;
const Text10 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
`;
const Riarrowrightline = styled(LazyLoadImage)`
  width: 20px;
  height: 20px;
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
const Text17 = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  color: var(--text-secondary);
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
