import React from "react";
import styled from "styled-components";
import {
  IMAGE10_SVG,
  IMAGE11_SVG,
  IMAGE12_SVG,
  IMAGE13_SVG,
  IMAGE14_SVG,
  IMAGE2_SVG,
  IMAGE3_SVG,
  IMAGE4_SVG,
  IMAGE5_SVG,
  IMAGE6_SVG,
  IMAGE7_SVG,
  IMAGE8_SVG,
  IMAGE9_SVG,
  LARGELOGO_SVG,
} from "../../assets/static";
import { ContentGroup } from "../Common/ContentGroup";
import { GroupRoot3 } from "./GroupRoot3";

const list = [
  {
    title: "Akila Blockchain ",
    label: "(Akila Chain)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: LARGELOGO_SVG,
    withSubtract: true,
  },
  {
    title: "Decentralized ",
    label: "Crypto Exchange",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE2_SVG,
    withSubtract: false,
  },
  {
    title: "Fiat Currency ",
    label: "Wallet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE3_SVG,
    withSubtract: true,
  },
  {
    title: "International Bank Account Number ",
    label: "(IBAN)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE4_SVG,
    withSubtract: false,
  },
  {
    title: "AkilaCard ",
    label: "(Visa or MasterCard)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE5_SVG,
    withSubtract: true,
  },
  {
    title: "Investment and ",
    label: "Asset Management ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE6_SVG,
    withSubtract: false,
  },
  {
    title: "Trade tokenized stocks, ",
    label: "ETFs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE7_SVG,
    withSubtract: true,
  },
  {
    title: "Lending & ",
    label: "Borrowing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE8_SVG,
    withSubtract: false,
  },
  {
    title: "Hotel ",
    label: "Booking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE9_SVG,
    withSubtract: true,
  },
  {
    title: "Flight ",
    label: "Ticket",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE10_SVG,
    withSubtract: false,
  },
  {
    title: "Mobile ",
    label: "Top-up",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE11_SVG,
    withSubtract: true,
  },
  {
    title: "Bill ",
    label: "Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE12_SVG,
    withSubtract: false,
  },
  {
    title: "Metaverse Decentralized Country and",
    label: "Citizenship",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE13_SVG,
    withSubtract: true,
  },
  {
    title: "Decentralized",
    label: "Messenger",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: IMAGE14_SVG,
    withSubtract: false,
  },
];

export const FeatureSection = ({ featuresRes }) => {
  return (
    <Flex>
      {featuresRes?.map((feature, index) => {
        const { name, tagName, icon, description } = feature?.attributes ?? {};
        const withSubtract = index % 2 === 0;
        return (
          <GroupRoot3
            key={name}
            content={
              <ContentGroup title={name} label={tagName} desc={description} />
            }
            withSubtract={withSubtract}
            platformProps={{
              image: icon,
              withPattern: !withSubtract,
            }}
          />
        );
      })}
    </Flex>
  );
};

const Flex = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-item: center;
  gap: 64px;
`;
