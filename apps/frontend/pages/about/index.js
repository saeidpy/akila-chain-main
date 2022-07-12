import parse from "html-react-parser";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import Header from "../../components/Header";
import Image from "../../components/Image";
import Seo from "../../components/Seo";
import { fetchAPI } from "../../lib/api";

export async function getStaticProps() {
  const team = await fetchAPI("/teams", { populate: "*" });

  return {
    props: { team: team?.data ?? [] },
    revalidate: 1,
  };
}

const About = ({ global, team }) => {
  const seo = {
    meta_title: "About Us",
  };
  return (
    <AboutRoot>
      <Seo seo={seo} />
      <Header title="About Us" des="Learn more about us" />
      {/* <Services>
        <Element3>
          <Icon alt="phone icon" src={'/assets/icon/phone.svg'} />
          <Title gap={'11px'}>
            <Text12>Lorem Ipsum Text</Text12>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
          </Title>
        </Element3>
        <Element3>
          <Icon alt="phone icon" src={'/assets/icon/phone.svg'} />
          <Title gap={'11px'}>
            <Text12>Lorem Ipsum Text</Text12>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
          </Title>
        </Element3>
        <Element3>
          <Icon alt="phone icon" src={'/assets/icon/phone.svg'} />
          <Title gap={'11px'}>
            <Text12>Lorem Ipsum Text</Text12>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
          </Title>
        </Element3>
      </Services> */}
      <Section>
        <Content gap={"33px"}>
          <AboutTitle>
            <AboutSecondTitle>
              {global?.attributes?.about_title}
            </AboutSecondTitle>
          </AboutTitle>
          <Paragraph3>{parse(global?.attributes?.about_text ?? "")}</Paragraph3>
        </Content>
        <Icon3 image={global?.attributes?.about_image} />
      </Section>
      <Testomontials>
        <Title13>
          <BgItem />
          <Text70>
            What they Say <WhatTheySayAboutUs>About Us</WhatTheySayAboutUs>
          </Text70>
        </Title13>
        <Reviews>
          {team?.map((item) => (
            <Element6 key={item}>
              <Head>
                <Profile image={item?.attributes?.profile} />
                <Content gap={"9px"}>
                  <Text15>{item?.attributes?.title}</Text15>
                  <Text16>{item?.attributes?.side}</Text16>
                </Content>
              </Head>
              <Paragraph4>{item?.attributes?.description}</Paragraph4>
            </Element6>
          ))}
        </Reviews>
      </Testomontials>
      {/* <Whitepaper /> */}
    </AboutRoot>
  );
};
export default About;

const AboutRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  width: 100%;
  align-items: flex-start;
  gap: 64px;
`;
const Services = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
const AboutTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  line-height: 33.08px;
  text-transform: capitalize;
  color: var(--text-primary);
  white-space: pre-wrap;
`;
const AboutSecondTitle = styled.p`
  font-size: 25px;
  line-height: 33.08px;
  text-transform: capitalize;
  color: var(--text-secondary-color);
  display: contents;
`;
const Paragraph3 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 22.77px;
  color: var(--text-secondary);
`;
const Icon3 = styled(Image)`
  align-self: center;
  flex:1
`;
const Testomontials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: flex-start;
  align-items: start;
  align-self: center;
  width: 100%;
`;
const WhatTheySayAboutUs = styled.p`
  font-size: 21px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--primary);
  display: contents;
`;
const Reviews = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Element3 = styled.div`
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: row;
  gap: 23px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 16px;
  max-width: 332px;
  width: 100%;
  margin: auto;
`;
const Icon = styled(LazyLoadImage)`
  width: 66.4px;
  height: 66.4px;
`;
const Text12 = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--text-primary);
  align-self: flex-start;
`;
const Paragraph = styled.p`
  width: 197px;
  font-size: 14px;
  line-height: 20.64px;
  text-transform: lowercase;
  color: var(--text-secondary);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
  flex: 2;
`;
const Element6 = styled.div`
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  gap: 17px;
  justify-content: flex-start;
  align-items: start;
  border-radius: 10px;
  padding: 16px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  justify-content: flex-start;
  align-items: center;
`;
const Profile = styled(Image)`
  width: 69px;
  height: 69px;
  border-radius: 10px;
`;
const Text15 = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--text-secondary-color);
`;
const Text16 = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
`;
const Paragraph4 = styled.p`
  width: 330px;
  font-size: 14px;
  font-weight: 300;
  line-height: 21.81px;
  color: var(--text-secondary);
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
