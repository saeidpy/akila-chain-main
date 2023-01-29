import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import styled from "styled-components";
export default function MenuSelect({ menuButton, items }) {
  return (
    <CustomMenu menuButton={menuButton}>
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
  }
`;
const CustomMenuItem = styled(MenuItem)`
  padding: 8px;

  &:hover {
    background-color: var(--borders);
  }
`;
