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

const list = {
  akilaChain: {
    title: "Akila Blockchain ",
    label: "(Akila Chain)",
    icon: LARGELOGO_SVG,
    withSubtract: true,
  },
  cryptoExchange: {
    title: "Decentralized ",
    label: "Crypto Exchange",
    icon: IMAGE2_SVG,
    withSubtract: false,
  },
  wallet: {
    title: "Fiat Currency ",
    label: "Wallet",
    icon: IMAGE3_SVG,
    withSubtract: true,
  },
  iban: {
    title: "International Bank Account Number ",
    label: "(IBAN)",
    icon: IMAGE4_SVG,
    withSubtract: false,
  },
  akilaCard: {
    title: "AkilaCard ",
    label: "(Visa or MasterCard)",
    icon: IMAGE5_SVG,
    withSubtract: true,
  },
  assetManagment: {
    title: "Investment and ",
    label: "Asset Management ",
    icon: IMAGE6_SVG,
    withSubtract: false,
  },
  etfs: {
    title: "Trade tokenized stocks, ",
    label: "ETFs",
    icon: IMAGE7_SVG,
    withSubtract: true,
  },
  borrowing: {
    title: "Lending & ",
    label: "Borrowing",
    icon: IMAGE8_SVG,
    withSubtract: false,
  },
  hotelBooking: {
    title: "Hotel ",
    label: "Booking",
    icon: IMAGE9_SVG,
    withSubtract: true,
  },
  flightTicket: {
    title: "Flight ",
    label: "Ticket",
    icon: IMAGE10_SVG,
    withSubtract: false,
  },
  mobileTopUp: {
    title: "Mobile ",
    label: "Top-up",
    icon: IMAGE11_SVG,
    withSubtract: true,
  },
  billPayment: {
    title: "Bill ",
    label: "Payment",
    icon: IMAGE12_SVG,
    withSubtract: false,
  },
  citizenship: {
    title: "Metaverse Decentralized Country and",
    label: "Citizenship",
    icon: IMAGE13_SVG,
    withSubtract: true,
  },
  messenger: {
    title: "Decentralized",
    label: "Messenger",
    icon: IMAGE14_SVG,
    withSubtract: false,
  },
};

export const FeatureSection = ({ featuresRes }) => {
  const remoteData = featuresRes?.attributes ?? {};
  const features = Object.entries(list ?? {})
    .map((item) => {
      const description = remoteData?.[item[0]] ?? "";
      if (description) {
        return {
          ...item[1],
          description: description,
        };
      }
      return false;
    })
    .filter((item) => item);
  return (
    <Flex>
      {features?.map((feature, index) => {
        const { title, label, icon, description } = feature ?? {};
        const withSubtract = index % 2 === 0;
        return (
          <GroupRoot3
            key={title}
            content={
              <ContentGroup title={title} label={label} desc={description} />
            }
            withSubtract={withSubtract}
            platformProps={{
              src: icon,
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
