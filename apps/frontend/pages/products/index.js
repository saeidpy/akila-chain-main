import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import Browser from "../../assets/js/Browser";
import Desktop from "../../assets/js/Desktop";
import SmartPhone from "../../assets/js/SmartPhone";
import { Button } from "../../components/Common/Button";
import Header from "../../components/Header";
import Image from "../../components/Image";
import Seo from "../../components/Seo";
import { getMedia } from "../../lib/media";

const Products = ({ global }) => {
  const {
    desktop_version,
    desktop_product_image,
    mobile_version,
    mobile_product_image,
    mobile_version_date_release,
    apple_download_link,
    android_download_link,
    linux_download_link,
    windows_download_link,
    mac_download_link,
    web_wallet_address,
    web_image,
  } = global?.attributes ?? {};
  const [select, setSelect] = useState(0);

  const getIcon = (key) => {
    switch (key) {
      case "mac":
        return "/assets/icon/apple.svg";
      case "windows":
        return "/assets/icon/windows.svg";
      case "linux":
        return "/assets/icon/linux.svg";
      case "apple":
        return "/assets/icon/apple.svg";
      case "android":
        return "/assets/icon/android.svg";
      case "web":
        return "/assets/icon/browserIcon.svg";
      default:
        break;
    }
  };

  const products = [
    {
      title: "desktop",
      icon: <Desktop />,
      version: desktop_version,
      dateVersion: "",
      image: desktop_product_image,
      links: [
        {
          name: "mac",
          link: mac_download_link,
        },
        {
          name: "windows",
          link: windows_download_link,
        },
        {
          name: "linux",
          link: linux_download_link,
        },
      ],
    },
    {
      title: "mobile",
      icon: <SmartPhone />,
      version: mobile_version,
      dateVersion: mobile_version_date_release,
      image: mobile_product_image,
      links: [
        {
          name: "apple",
          link: apple_download_link,
        },
        {
          name: "android",
          link: android_download_link,
        },
      ],
    },
    {
      title: "web",
      icon: <Browser />,
      image: web_image,
      links: [{ name: "web", link: web_wallet_address }],
    },
  ];
  const seo = {
    metaTitle: "Products",
    ogType: "Products",
  };
  return (
    <Root>
      <Seo seo={seo} />
      <Header title="Products" des="More from us" />
      <Body>
        <Documents gap={"34px"}>
          <Title13>
            <BgItem />
            <Text70>
              Choose Your <ChooseYourWallet>Products</ChooseYourWallet>
            </Text70>
          </Title13>
          <Boxes>
            {products?.map((option, index) => (
              <Element4
                key={index}
                selected={select === index}
                onClick={(e) => setSelect(index)}
              >
                <Nav gap={"10px"}>
                  {option?.icon}
                  <Text1 fontWeight={"500"}>{option?.title}</Text1>
                </Nav>
              </Element4>
            ))}
          </Boxes>
        </Documents>
        <Screens image={products?.[select]?.image} />
        <Documents gap={"34px"}>
          <Title13>
            <BgItem />
            <Text70>
              <ChooseYourWallet1>Official</ChooseYourWallet1>
            </Text70>
          </Title13>
          <Title2 gap={"396px"}>
            <Title7>
              <Chip alt="chip icon" src={"/assets/icon/chip.svg"} />
              <Element20>
                <Text14>Main Core</Text14>
                <Element7>{`${products?.[select]?.version ?? ""} ${
                  products?.[select]?.dateVersion ?? ""
                }`}</Element7>
              </Element20>
            </Title7>
            <Element1 gap={"22px"}>
              {products?.[select].links?.map((link) => (
                <Element8 padding={"11px 42px"} key={link}>
                  <Cont
                    target={"_blank"}
                    href={
                      typeof link.link === "string"
                        ? link.link
                        : getMedia(link.link)
                    }
                  >
                    <Text15>{link.name}</Text15>
                    <Bxbxlapple alt="apple icon" src={getIcon(link.name)} />
                  </Cont>
                </Element8>
              ))}
            </Element1>
          </Title2>
        </Documents>
      </Body>

      {/* <Whitepaper /> */}
    </Root>
  );
};

export default Products;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  width: 100%;
  align-items: flex-start;
  gap: 64px;
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

const ChooseYourWallet = styled.div`
  font-size: 21px;
  font-weight: 400;
  text-transform: capitalize;
  color: var(--primary);
  display: contents;
`;
const Boxes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
`;
const Element4 = styled(Button)`
  width: 100%;
  max-width: 241px;
  border-style: solid;
  border-color: ${({ selected }) =>
    selected ? "var(--primary)" : "var(--primary-background)"};
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 14px 87px;
  margin: auto;
  color: ${({ selected }) =>
    selected ? "var(--primary)" : "var(--text-secondary)"};
`;
const Screens = styled(Image)`
  width: 100%;
`;
const Cont = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
  background: transparent;
`;
const Element1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  gap: 16px;
  flex-wrap: wrap;
`;
const Text1 = styled.p`
  font-size: 16px;
  text-transform: capitalize;
  font-weight: ${(props) => props.fontWeight};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
`;
const Documents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
  width: 100%;
`;
const ChooseYourWallet1 = styled.p`
  font-size: 21px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--text-primary);
  position: absolute;
  top: 2px;
  left: 15px;
  white-space: pre-wrap;
`;
const Title2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 32px;
`;
const Title7 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
`;
const Chip = styled(LazyLoadImage)`
  width: 47px;
  height: 47px;
  margin: 0px 0px 4px 0px;
`;
const Element20 = styled.div`
  align-self: stretch;
  width: 146px;
  height: 61px;
  position: relative;
  flex-grow: 1;
`;
const Text14 = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 34.5px;
  text-transform: capitalize;
  color: var(--text-primary);
`;
const Element7 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 27.6px;
  text-transform: capitalize;
  color: var(--text-secondary);
  position: absolute;
  top: 33px;
  white-space: pre-wrap;
`;
const Element8 = styled(Button)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: ${(props) => props.padding};
`;
const Text15 = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 24.15px;
  text-transform: capitalize;
  color: var(--text-primary);
`;
const Bxbxlapple = styled(LazyLoadImage)`
  width: 24px;
  height: 24px;
`;
