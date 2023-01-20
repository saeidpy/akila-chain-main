import styled from "styled-components";
import React from "react";

const SimpleButton = styled.button`
  cursor: pointer;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-style: unset;
  align-items: center;
  text-transform: capitalize;
  position: relative;
  box-shadow: var(--box-shadow);
  background-color: var(--primary-background);
  z-index: 1;
`;

const MuiButton = styled(SimpleButton)`
  &:hover {
    text-decoration: none;
    box-shadow: var(--hover-box-shadow);
    background: var(--box-shadow-background);
  }
  box-shadow: ${({ selected }) =>
    selected ? "var(--hover-box-shadow)" : "var(--box-shadow)"};
  background: ${({ selected }) =>
    selected ? "var(--box-shadow-background)" : "var(--primary-background)"};
`;
export const Button = ({ children, ...rest }) => (
  <MuiButton {...rest}>{children}</MuiButton>
);
