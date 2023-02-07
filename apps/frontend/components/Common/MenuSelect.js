import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { useRef } from "react";
import styled from "styled-components";
export default function MenuSelect({ menuButton, items, withHoverOpen }) {
  const instanceRef = useRef();
  const onClose = () => {
    instanceRef?.current?.closeMenu();
  };

  const onOpen = () => {
    withHoverOpen && instanceRef.current?.openMenu?.();
  };
  return (
    <CustomMenu
      id="menu"
      instanceRef={instanceRef}
      onMouseLeave={onClose}
      menuButton={<Item onMouseOver={onOpen}>{menuButton}</Item>}
    >
      {items.map((item, index) => (
        <CustomMenuItem key={index}>{item}</CustomMenuItem>
      ))}
    </CustomMenu>
  );
}

const CustomMenu = styled(Menu)`
  ul {
    background-color: var(--primary-background);
    padding: 4px !important;
    min-width: auto;
  }
`;
const CustomMenuItem = styled(MenuItem)`
  padding: 8px;

  &:hover {
    background-color: var(--borders);
  }
`;
const Item = styled.div`
  cursor: pointer;
`;
