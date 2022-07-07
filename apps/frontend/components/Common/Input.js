import styled from "styled-components";
import React from 'react';

const Input = (props) => <CustomInput {...props} />;

const CustomInput = styled.input`
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0;
  width: 100%;
  animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms;
  outline: none;
`;
export default Input;
