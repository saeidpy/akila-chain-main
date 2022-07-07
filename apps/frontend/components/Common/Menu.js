import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = ({ open = false, menuList, ...props }) => {
  const isHidden = open ? true : false;
  const { pathname } = useRouter();
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {menuList?.map((item) => (
        <Link href={item.link} passHref key={item}>
          <TextLink selected={item.link === pathname}>
            {item.childText}
          </TextLink>
        </Link>
      ))}
    </StyledMenu>
  );
};
export default Menu;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) =>    open ? "translateX(0) !important" : "translateX(-100%) !important"};
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
