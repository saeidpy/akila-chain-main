import { useEffect, useRef, useState } from "react";
import ReactFocusLock from "react-focus-lock";
import styled from "styled-components";
import { useOnClickOutside } from "../hooks";
import Link from "next/link";
import React from "react";
import Burger from "./Common/Burger";
import Menu from "./Common/Menu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "./Image";
import { v4 } from "uuid";
import { useRouter } from "next/router";
const MenuList = [
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
    childText: "About Us",
    link: "/about",
  },
  {
    childText: "Blog",
    link: "/blog",
  },
  {
    childText: "Contact us",
    link: "/contact",
  },
];

export default function TopBar(props) {
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
        {MenuList.slice(0, 3).map((data) => (
          <Link href={data.link} key={data} passHref>
            <Text2 selected={data.link === pathname} key={v4()}>
              {data.childText}
            </Text2>
          </Link>
        ))}
      </Element1>
      <Link href="/" passHref>
        <LazyLoadImage
          alt="akila chain logo"
          src={`/assets/icon/mainLogo.svg`}
        />
        {/* <Logo image={props?.global?.attributes?.favicon} /> */}
      </Link>
      <Element1>
        {MenuList.slice(3).map((data) => (
          <Link href={data.link} key={data} passHref>
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
`;
const Element1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  gap: var(--x4);
  @media (max-width: 1024px) {
    display: none;
  }
`;
const Text2 = styled.a`
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  color: ${({ selected }) =>
    selected ? "var(--text-primary-color)" : "var(--text-secondary)"};
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
  &:hover {
    color: var(--text-primary-color) !important;
  }
`;
const Logo = styled(Image)`
  cursor: pointer;
`;

const MenuParent = styled.div`
  display: none;
  position: relative;
  @media (max-width: 1024px) {
    display: unset;
  }
`;
