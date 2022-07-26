import styled from "styled-components";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 } from "uuid";
import Link from "next/link";
import { MailLine } from "../assets/js/MailLine";
import { TwitterLine } from "../assets/js/TwitterLine";
import { SkypeLine } from "../assets/js/SkypeLine";
import { InstagramLine } from "../assets/js/InstagramLine";
import { FacebookLine } from "../assets/js/FacebookLine";

export default function Footer({ global }) {
  return (
    <FooterElement>
      <Nav>
        <About>
          <Logo alt="akila chain logo" src={`/assets/icon/mainLogo.svg`} />
          <Paragraph24>
            AkilaCain is a Decentralized Public Blockchain Leveraging The
            Security of Bitcoin UTXO While Enabling Cognizant Protocol to
            Create, Store And Transfer Digital Assets From One Party To Another
          </Paragraph24>
        </About>
        <Element1>
          <Element34>
            <Title13>
              <BgItem />
              <Text70>Menu</Text70>
            </Title13>
            <AboutUsBlogLegalHelp>
              <Link href="/about">About Us</Link>
              <br />
              <Link href="/blog">Blog</Link>
              <br />
              <Link href="/contact">Contact us</Link>
              <br />
              <Link href="/developer">Developer</Link>
            </AboutUsBlogLegalHelp>
          </Element34>
          <Element34>
            <Title14>
              <BgItem />
              <Text70>Partners</Text70>
            </Title14>
            <AboutUsBlogLegalHelp>
              OTC Trading
              <br />
              Add Token
              <br />
              Market Makers
              <br />
              Work With Us
            </AboutUsBlogLegalHelp>
          </Element34>
          <Element34>
            <Title15>
              <BgItem />
              <Text70>users</Text70>
            </Title15>
            <AboutUsBlogLegalHelp>
              Support
              <br />
              Verification
              <br />
              Fees and Limits
              <br />
              Bug Report
            </AboutUsBlogLegalHelp>
          </Element34>
          <Element34>
            <Title16>
              <BgItem />
              <Text70>utility</Text70>
            </Title16>
            <AboutUsBlogLegalHelp>
              API
              <br />
              FIX
              <br />
              Price Widget
              <br />
              System Monitor
            </AboutUsBlogLegalHelp>
          </Element34>
        </Element1>
      </Nav>
      <Copyright>
        <Text75>COPYRIGHT ©2021 AKILA CHAIN</Text75>
        <Element2>
          {[
            {
              icon: <MailLine />,
              alt: "email icon",
              link: global?.attributes?.email_link ?? "",
            },
            {
              icon: <FacebookLine />,
              alt: "facebook icon",
              link: global?.attributes?.facebook_link ?? "",
            },
            {
              icon: <InstagramLine />,
              alt: "instagram icon",
              link: global?.attributes?.instagram_link ?? "",
            },
            {
              icon: <SkypeLine />,
              alt: "skype icon",
              link: global?.attributes?.skype_link ?? "",
            },
            {
              icon: <TwitterLine />,
              alt: "twitter icon",
              link: global?.attributes?.twitter_link ?? "",
            },
          ].map((data, index) => (
            <Link key={index} href={data.link} passHref={!!data.link}>
              <Line target={"_blank"}>{data.icon}</Line>
            </Link>
          ))}
        </Element2>
      </Copyright>
    </FooterElement>
  );
}
const Line = styled.a`
  &:hover {
    color: var(--primary) !important;
  }
  cursor: pointer;
`;
const FooterElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 43px;
  justify-content: flex-start;
  align-items: center;
  margin-top: 64px;
  padding: 16px 0;
`;
const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  justify-content: flex-start;
  align-items: start;
  align-self: flex-start;
  flex: 1;
`;
const Paragraph24 = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 26.28px;
  color: var(--text-secondary);
`;
const Title13 = styled.div`
  width: 64px;
  height: 27px;
  position: relative;
`;
const Title14 = styled.div`
  width: 84px;
  height: 27px;
  position: relative;
`;
const Title15 = styled.div`
  width: 61px;
  height: 27px;
  position: relative;
`;
const Title16 = styled.div`
  width: 66px;
  height: 27px;
  position: relative;
`;
const Copyright = styled.div`
  box-shadow: var(--box-shadow);
  background-color: var(--primary-background);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: var(--x3);
  width: 90%;
  flex-wrap: wrap;
  gap: var(--x4);
  @media (max-width: 690px) {
    justify-content: center;
  }
`;
const Text75 = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3.06px;
  line-height: 29.04px;
  color: var(--text-primary);
`;

const Logo = styled(LazyLoadImage)``;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--x4);
  @media (max-width: 690px) {
    flex-direction: column;
  }
`;
const Element1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  flex: 3;
  flex-wrap: wrap;
  width: 100%;
  gap: var(--x4);
`;
const Element2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: var(--x4);
  align-self: center;
`;
const Element34 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;
  align-items: flex-start;
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
const Text70 = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--text-primary);
  top: 0px;
  left: var(--x3);
  position: absolute;
`;
const AboutUsBlogLegalHelp = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 33.88px;
  color: var(--text-secondary);
  align-self: flex-end;
`;

const Riarrowrightline = styled(LazyLoadImage)`
  cursor: pointer;
`;
