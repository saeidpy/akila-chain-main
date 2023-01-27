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
import { LOGO_FULL_SVG } from "../assets/static";
const MenuList = [
  {
    childText: "Home",
    link: "/",
  },
  {
    childText: "Developer",
    link: "/developer",
  },
  {
    childText: "Products",
    link: "/products",
  },
  {
    childText: "Projects",
    link: "/projects",
  },
  {
    childText: "",
    link: "",
  },
  {
    childText: "",
    link: "",
  },
  {
    childText: "",
    link: "",
  },
  {
    childText: "Chain",
    link: "/chain",
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
  const { pathname } = useRouter();

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
      <Element1>
        {MenuList.slice(0, 4).map((data) => (
          <Link href={data.link} key={data} passHref={!!data.link}>
            <Text2 selected={data.link === pathname} key={v4()}>
              {data.childText}
            </Text2>
          </Link>
        ))}
      </Element1>
      <Link href="/" passHref>
        <Image alt="akila chain logo" src={LOGO_FULL_SVG} />
        {/* <Logo image={props?.global?.attributes?.favicon} /> */}
      </Link>
      <Element1>
        {MenuList.slice(4).map((data) => (
          <Link href={data.link} key={data} passHref={!!data.link}>
            <Text2 selected={data.link === pathname} key={v4()}>
              {data.childText}
            </Text2>
          </Link>
        ))}
      </Element1>
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
  align-items: start;
  gap: var(--x4);
  padding: 9px 0px;
  @media (max-width: 1024px) {
    display: none;
  }
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
