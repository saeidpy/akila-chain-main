import styled from "styled-components";

import React from "react";

function HeadText1() {
  return <HeadText1Element></HeadText1Element>;
}

export default HeadText1;
const HeadText1Element = styled("div")`
  display: flex;
`;
const Text1Element = styled("p")`
  color: var(--text-secondary);
`;
const Text2Element = styled("p")`
  color: var(--text-primary);
`;
