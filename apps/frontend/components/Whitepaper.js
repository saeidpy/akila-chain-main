import styled from "styled-components";
import { Button } from "./Common/Button";
import Subtract from "./Subtract";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Whitepaper(props) {
  const { state, setState } = props;
  return (
    <Subtract7>
      <Circle />
      <Topbar gap={"36px"}>
        <Topbar gap={"23px"}>
          <Text58>Whitepaper</Text58>
          <Paragraph19>
            Cryptro connects banks, payment providers, digital asset exchanges
            and{"  "}corporates via Cryptro to provide one.
          </Paragraph19>
        </Topbar>
        <Button1 width={"162px"}>
          <Text10>Whitepaper (Eng)</Text10>
          <Riarrowrightline
            alt="right arrow icon"
            src={"/assets/icon/fileLine.svg"}
          />
        </Button1>
      </Topbar>
    </Subtract7>
  );
}

const Circle = styled.div`
  width: 85px;
  height: 85px;
  position: absolute;
  background: var(--secondary);
  right: -40px;
  bottom: -40px;
  border-radius: 50%;
`;

export const Subtract7 = styled(Subtract)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 64px 0px;
  --scoop-radius: 56px;
  --border-width: 6px;
  --border-color: #eee0;
  background-color: var(--primary-background);
  --border-stop: calc(var(--scoop-radius) + var(--border-width));
  --scoop-gradient: rgba(255, 255, 255, 0) var(--scoop-radius),
    var(--border-color) calc(var(--scoop-radius) + 1px),
    var(--border-color) var(--border-stop),
    var(--primary-background) calc(var(--border-stop) + 1px);
  background: radial-gradient(circle at 100% 100%, var(--scoop-gradient));
  background-repeat: no-repeat;
  box-sizing: border-box;
  width: 100%;
  filter: drop-shadow(5.13333px 5.13333px 15.4px rgba(174, 174, 174, 0.82));
  border-radius: 10px;
`;
const Topbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
`;
const Text58 = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: var(--text-primary);
`;
const Paragraph19 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 21.02px;
  color: var(--text-secondary);
  white-space: pre-wrap;
`;
const Button1 = styled(Button)`
  height: 28px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 91px;
  padding: 12px 27px;
  box-sizing: content-box;
`;
const Riarrowrightline = styled(LazyLoadImage)`
  width: 20px;
  height: 20px;
`;

const Text10 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
`;
