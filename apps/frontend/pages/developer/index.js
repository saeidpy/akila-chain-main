import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import Header from "../../components/Header";
import Seo from "../../components/Seo";
import Whitepaper from "../../components/Whitepaper";
import { fetchAPI } from "../../lib/api";
import { groupByCategory } from "../../utils/index";
export async function getServerSideProps() {
  const development = await fetchAPI("/developments");

  return { props: { development: development?.data } };
}
const Developer = ({ development }) => {
  const arrayOfGroup = Object.entries(
    groupByCategory(
      development?.map((item) => item?.attributes),
      "type"
    )
  ).map((item, index) => ({
    name: "develoepr " + item[0],
    icon:
      index % 2 === 0
        ? "/assets/icon/fileLine.svg"
        : "/assets/icon/codeLine.svg",
    data: item[1],
  }));
  const seo = {
    meta_title: "Developers",
    og_type: "Developers",
  };
  return (
    <Root>
      <Seo seo={seo} />
      <Header title="Developer" des="More from us" />
      <BodyRoot>
        <Documents gap={"34px"}>
          <Title13>
            <BgItem />
            <Text70>
              Start<StartFromHere fontWeight={"500"}> </StartFromHere>
              <StartFromHere fontWeight={"600"}>from here</StartFromHere>
            </Text70>
          </Title13>
          <Boxes gap={"32px"}>
            {arrayOfGroup?.map((item, index) => {
              return (
                <Element5 key={index}>
                  <Title1 gap={"10px"}>
                    <Rifileline alt="file icon" src={item.icon} />
                    <Text1>{item?.name}</Text1>
                  </Title1>
                  <Documents gap={"9px"}>
                    {item?.data?.map((title, index) => (
                      <Title1 gap={"7px"} key={index}>
                        <Uilarrowtoright
                          alt="arrow icon"
                          src={"/assets/icon/arrowLine.svg"}
                        />
                        <Link href={title.link} key={index} passHref>
                          <Text2 target={'_blank'}>{title?.title}</Text2>
                        </Link>
                      </Title1>
                    ))}
                  </Documents>
                </Element5>
              );
            })}
          </Boxes>
        </Documents>
      </BodyRoot>
      <Whitepaper />
    </Root>
  );
};

export default Developer;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  width: 100%;
  align-items: flex-start;
  gap: 64px;
`;

const BodyRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  justify-content: flex-start;
  align-items: start;
  margin: auto;
  width: 100%;
`;
const Element5 = styled.div`
  box-shadow: var(--box-shadow);
  width: 100%;
  flex: 1 1 524px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: start;
  border-radius: 10px;
  padding: 18px;
`;
const BountyPlans = styled.p`
  font-size: 21px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--primary);
  display: contents;
`;
const Documents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
  width: 100%;
`;
const Bg = styled(LazyLoadImage)`
  width: 34px;
  height: 34px;
  position: absolute;
`;
const StartFromHere = styled.p`
  font-size: 21px;
  text-transform: capitalize;
  color: var(--text-primary);
  display: contents;
  white-space: pre-wrap;
  font-weight: ${(props) => props.fontWeight};
`;
const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: ${(props) => props.gap};
  width: 100%;
  flex-wrap: wrap;
`;
const Title1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Rifileline = styled(LazyLoadImage)`
  width: 30px;
  height: 30px;
`;
const Text1 = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  color: var(--text-primary);
`;
const Uilarrowtoright = styled(LazyLoadImage)`
  width: 21px;
  height: 21px;
`;
const Text2 = styled.a`
  font-size: 15px;
  font-weight: 400;
  line-height: 23.33px;
  color: var(--text-secondary);
  cursor: pointer;
  &:hover {
    color: var(--text-primary-color) !important;
  }
`;
const Element11 = styled.div`
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: row;
  gap: 27px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  padding: 16px;
  flex: 1 1 323px;
  width: 100%;
  margin: auto;
`;
const Icon = styled(LazyLoadImage)`
  width: 73px;
  height: 73px;
`;
const Text11 = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--text-primary);
`;
const Text12 = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-transform: capitalize;
  color: #4f4f4f;
`;

const Title13 = styled.div`
  width: 100%;
  height: 27px;
  position: relative;
`;
const BgItem = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: var(--box-shadow-background);
  box-shadow: var(--box-shadow);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    bottom: 0px;
    left: 0px;
    border-radius: 50%;
    background: var(--secondary);
  }
`;
const Text70 = styled.h1`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--text-primary);
  top: 0px;
  left: var(--x3);
  position: absolute;
`;
