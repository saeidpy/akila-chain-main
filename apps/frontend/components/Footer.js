import styled from "styled-components";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MailLine } from "../assets/js/MailLine";
import { TwitterLine } from "../assets/js/TwitterLine";
import { SkypeLine } from "../assets/js/SkypeLine";
import { InstagramLine } from "../assets/js/InstagramLine";
import { FacebookLine } from "../assets/js/FacebookLine";
import { LARGELOGO_SVG } from "../assets/static";

export default function Footer({ global }) {
  return (
    <FooterElement>
      <Nav>
        <About>
          <Image alt="akila chain logo" src={LARGELOGO_SVG} />
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
            <Element3>
              <AboutUsBlogLegalHelp>
                <Link href="/">Home</Link>
                <br />
                <Link href="/chain">AkilaChain</Link>
                <br />
                <Link href="/blog">Blog</Link>
                <br />
                <Link href="/contact">Contact us</Link>
                <br />
                <Link href="/about">About Us</Link>
              </AboutUsBlogLegalHelp>
            </Element3>
          </Element34>
          <Element34>
            <Title14>
              <BgItem />
              <Text70>Ecosystem & Projects</Text70>
            </Title14>
            <Element3>
              <AboutUsBlogLegalHelp>
                <Link href={"/"}>Crypto Exchange</Link>
                <br />
                <Link href={"/"}>Fiat Currency Wallet</Link>
                <br />
                <Link href={"/"}>IBAN accounts</Link>
                <br />
                <Link href={"/"}>Akila Card</Link>
                <br />
                <Link href={"/"}>Investment</Link>
              </AboutUsBlogLegalHelp>
              <AboutUsBlogLegalHelp>
                <Link href={"/"}>Trading</Link>
                <br />
                <Link href={"/"}>Lending & Borrowing</Link>
                <br />
                <Link href={"/"}>Hotel Booking</Link>
                <br />
                <Link href={"/"}>Flight Ticket</Link>
                <br />
                <Link href={"/"}>Mobile Top-Up</Link>
              </AboutUsBlogLegalHelp>
              <AboutUsBlogLegalHelp>
                <Link href={"/"}>Bill Payment</Link>
                <br />
                <Link href={"/"}>Metaverse</Link>
                <br />
                <Link href={"/"}>Messenger</Link>
              </AboutUsBlogLegalHelp>
            </Element3>
          </Element34>
        </Element1>
      </Nav>
      <Copyright>
        <Text75>{global?.attributes?.copyright}</Text75>
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
  width: 100%;
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
  width: 100%;
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

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--x4);
  @media (max-width: 870px) {
    flex-direction: column;
  }
`;
const Element1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex: 3;
  flex-wrap: wrap;
  width: 100%;
  gap: var(--x4);
`;
const Element3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  flex: 3;
  padding: 0px 24px;
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
  align-self: start;
`;
