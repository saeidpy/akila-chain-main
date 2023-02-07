import { useEffect, useRef, useState } from "react";
import ReactFocusLock from "react-focus-lock";
import styled from "styled-components";
import { useOnClickOutside } from "../hooks";
import Link from "next/link";
import React from "react";
import Burger from "./Common/Burger";
import Menu from "./Common/Menu";
import Image from "next/image";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import { FLAGS, LOGO_FULL_SVG } from "../assets/static";
import MenuSelect from "./Common/MenuSelect";
import config from "../next.config";
const MenuList = [
  {
    childText: "Home",
    link: "/",
  },
  {
    childText: "AkilaChain",
    link: "/chain",
  },
  {
    childText: "Ecosystem & Projects",
    menu: true,
    children: [
      "Crypto Exchange ",
      "Fiat Currency Wallet ",
      "IBAN account ",
      "Akila Card ",
      "Investment ",
      "Trading ",
      "Lending and Borrowing ",
      "Hotel Booking ",
      "Flight Ticket ",
      "Mobile Top-Up ",
      "Bill Payment ",
      "Metaverse ",
      "Messenger",
    ],
    props: {
      withHoverOpen: true,
    },
  },
  {
    childText: "Blog",
    link: "/blog",
  },
  {
    childText: "Contact us",
    link: "/contact",
  },
  {
    childText: "About Us",
    link: "/about",
  },
];

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const { pathname, locale } = useRouter();

  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => {
    setTimeout(() => {
      setOpen(false);
    }, 100);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);
  return (
    <TopBarElement>
      <MenuParent ref={node}>
        <ReactFocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        </ReactFocusLock>
      </MenuParent>
      <Menu
        menuList={MenuList}
        link={Link}
        open={open}
        setOpen={setOpen}
        id={menuId}
      />
      <Element>
        <Link href="/" passHref>
          <Image alt="akila chain logo" src={LOGO_FULL_SVG} />
          {/* <Logo image={props?.global?.attributes?.favicon} /> */}
        </Link>
        <Element1>
          {MenuList.map((data) => {
            if (data.menu) {
              return (
                <MenuSelect
                  {...data?.props}
                  menuButton={
                    <Text2 selected={data.link === pathname} key={v4()}>
                      {data.childText}
                    </Text2>
                  }
                  items={data.children}
                />
              );
            } else
              return (
                <Link href={data.link} key={data} passHref={!!data.link}>
                  <Text2 selected={data.link === pathname} key={v4()}>
                    {data.childText}
                  </Text2>
                </Link>
              );
          })}
        </Element1>
        <Element1>
          <MenuSelect
            menuButton={
              <Image
                width={24}
                height={24}
                alt="flags"
                title={locale}
                src={FLAGS[locale]}
              />
            }
            items={config.i18n.locales
              .filter((item) => item !== locale)
              .map((item, index) => (
                <Link key={index} href={"/"} locale={item}>
                  <a title={item}>
                    <Image
                      width={24}
                      height={24}
                      alt="flags"
                      src={FLAGS[item]}
                    />
                  </a>
                </Link>
              ))}
          />
        </Element1>
      </Element>
    </TopBarElement>
  );
}

const TopBarElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: var(--x3);
  border-bottom: 1px solid var(--borders);
  margin-bottom: var(--x6);
  min-height: 64px;
`;
const Element1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: var(--x4);
  padding: 9px 0px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const Element = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 64px;
`;
const Text2 = styled.a`
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  color: ${({ selected }) =>
    selected
      ? "var(--text-primary-color) !important"
      : "var(--text-secondary) !important"};
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
  &:hover {
    color: var(--text-primary-color) !important;
  }
`;

const MenuParent = styled.div`
  display: none;
  position: relative;
  @media (max-width: 1024px) {
    display: unset;
  }
`;
