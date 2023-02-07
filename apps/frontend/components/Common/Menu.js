import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import config from "../../next.config";
import Image from "next/image";
import { FLAGS } from "../../assets/static";

const Menu = ({ open = false, menuList, ...props }) => {
  const isHidden = open ? true : false;
  const { pathname, locale } = useRouter();
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {menuList
        .filter((item) => item.link)
        ?.map((item) => (
          <Link href={item.link} passHref key={item}>
            <TextLink selected={item.link === pathname}>
              {item.childText}
            </TextLink>
          </Link>
        ))}
      <Flags>
        {config.i18n.locales.map((item, index) => (
          <Link key={index} href={"/"} locale={item}>
            <a title={item}>
              <Image width={24} height={24} alt="flags" src={FLAGS[item]} />
            </a>
          </Link>
        ))}
      </Flags>
    </StyledMenu>
  );
};
export default Menu;
const Flags = styled.div`
  display: flex;
  align-self: center;
  gap: 16px;
  margin: 2rem 2.5rem;
`;
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) =>
    open ? "translateX(0) !important" : "translateX(-100%) !important"};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  overflow-y: auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

const TextLink = styled.a`
  font-size: 2rem;
  text-transform: capitalize;
  margin: 2rem 2.5rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;
  cursor: pointer;
  text-decoration: ${({ selected }) =>
    selected ? "line-through !important" : "none !important"};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;
