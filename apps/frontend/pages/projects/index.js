import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { Button } from "../../components/Common/Button";
import Header from "../../components/Header";
import Image from "../../components/Image";
import Seo from "../../components/Seo";
import Whitepaper from "../../components/Whitepaper";
import { fetchAPI } from "../../lib/api";
export async function getServerSideProps() {
  const projects = await fetchAPI("/projects", { populate: "*" });

  return { props: { projects: projects?.data } };
}
const seo = {
  meta_title: "Projects",
  og_type: "Projects",
};
const Projects = ({ projects }) => {
  return (
    <Root>
      <Seo seo={seo} />
      <Header title="Projects" des="More from us" />
      <BodyRoot>
        <Documents gap={"34px"}>
          <Title13>
            <BgItem />
            <Text70>
              Bounty <BountyPlans>Plans</BountyPlans>
            </Text70>
          </Title13>
          <Boxes gap={"32px 43px"}>
            {projects?.map((item) => {
              return (
                <Link href={`projects/${item?.attributes?.slug}`} key={item}>
                  <Element11 key={item?.attributes?.slug}>
                    <Icon image={item?.attributes?.image} />
                    <Documents gap={"8px"}>
                      <Text11>{item?.attributes?.title}</Text11>
                      {/* <Text12>100 Points</Text12> */}
                    </Documents>
                  </Element11>
                </Link>
              );
            })}
          </Boxes>
        </Documents>
      </BodyRoot>
      <Whitepaper />
    </Root>
  );
};

export default Projects;

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
  margin: auto;
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
  justify-content: flex-start;
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
const Text2 = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 23.33px;
  color: var(--text-secondary);
`;
const Element11 = styled(Button)`
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: row;
  gap: 27px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  max-width: 356px;
  @media (max-width: 1024px) {
    margin: auto;
  }
`;
const Icon = styled(Image)`
  width: 73px;
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
