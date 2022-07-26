import Link from "next/link";
import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSnackbar } from "react-simple-snackbar";
import styled from "styled-components";
import { FacebookLine } from "../../assets/js/FacebookLine";
import { InstagramLine } from "../../assets/js/InstagramLine";
import { MailLine } from "../../assets/js/MailLine";
import { SkypeLine } from "../../assets/js/SkypeLine";
import { TwitterLine } from "../../assets/js/TwitterLine";
import { Button } from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import Header from "../../components/Header";
import Seo from "../../components/Seo";
import { fetchAPI } from "../../lib/api";

export async function getServerSideProps({ params }) {
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: "*",
  });
  // Pass the data to our page via props
  return { props: { global: globalRes?.data ?? {} } };
}

const Contact = ({ global }) => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const ref = useRef();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(ref.current);
    const result = [];
    for (const [name, value] of formData) {
      result[name] = value;
    }
    await fetch(process.env.NEXT_PUBLIC_API_URL_CLIENT + "/contact-uses", {
      body: JSON.stringify({ data: result }),
      method: "POST",
    })
      .then((res) => {
        if (res?.error?.message) {
          openSnackbar(res?.error?.message);
        } else {
          openSnackbar("Success");
          ref.current.reset();
        }
      })
      .catch((error) => {
        openSnackbar(new Error(error).message);
      });
  };

  const seo = {
    meta_title: "Contact US",
  };
  return (
    <Root>
      <Seo seo={seo} />
      <Header title="Contact Us" des="Get in touch with us" />
      <ContactRoot>
        <Content gap={"33px"}>
          <Boxes gap={"16px"}>
            <Element7>
              <Riphoneline
                alt="phone icon"
                src={"/assets/icon/phoneLine.svg"}
              />
              <Text1>
                <Text3>Phone Number</Text3>
                <Text4 margin={"0px 0px 4px 0px"}>
                  {global?.attributes?.phone_number}
                </Text4>
              </Text1>
            </Element7>
            <Element7>
              <Riphoneline alt="mail icon" src={"/assets/icon/mail.svg"} />
              <Text1>
                <Text3>Email Address</Text3>
                <Text4 margin={"0px 0px 4px 0px"}>
                  {global?.attributes?.email}
                </Text4>
              </Text1>
            </Element7>
          </Boxes>
          <Paragraph>
            Please get in touch and our expert support team will answer all your
            questions.
          </Paragraph>
          <Boxes1 gap={"41px"}>
            <Link
              href={global?.attributes?.email_link ?? ""}
              passHref={!!global?.attributes?.email_link}
            >
              <Line target={"_blank"}>
                <MailLine />
              </Line>
            </Link>
            <Link
              href={global?.attributes?.facebook_link ?? ""}
              passHref={!!global?.attributes?.facebook_link}
            >
              <Line target={"_blank"}>
                <FacebookLine />
              </Line>
            </Link>
            <Link
              href={global?.attributes?.instagram_link ?? ""}
              passHref={!!global?.attributes?.instagram_link}
            >
              <Line target={"_blank"}>
                <InstagramLine />
              </Line>
            </Link>
            <Link
              href={global?.attributes?.skype_link ?? ""}
              passHref={!!global?.attributes?.skype_link}
            >
              <Line target={"_blank"}>
                <SkypeLine />
              </Line>
            </Link>
            <Link
              href={global?.attributes?.twitter_link ?? ""}
              passHref={!!global?.attributes?.twitter_link}
            >
              <Line target={"_blank"}>
                <TwitterLine />
              </Line>
            </Link>
          </Boxes1>
        </Content>
        <Message onSubmit={onSubmit} ref={ref}>
          <Title13>
            <BgItem />
            <Text70>
              Leave Your <LeaveYourMessage>message</LeaveYourMessage>
            </Text70>
          </Title13>
          <ContentInput gap={"20px"}>
            <ContentInput gap={"8px"}>
              <Text9>Your name</Text9>
              <WhiteRectangle height={"48px"} />
            </ContentInput>
            <ContentInput gap={"8px"}>
              <Text9>Your Email</Text9>
              <WhiteRectangle
                type="email"
                name="email"
                height={"48px"}
                required
              />
            </ContentInput>
            <ContentInput gap={"8px"}>
              <Text9>Phone</Text9>
              <WhiteRectangle name="phone" height={"48px"} required />
            </ContentInput>
            <ContentInput gap={"8px"}>
              <Text9>Your Message</Text9>
              <WhiteRectangle
                name="message"
                type="textarea"
                height={"86.4px"}
              />
            </ContentInput>
            <Text13 type="submit">Send Message</Text13>
          </ContentInput>
        </Message>
      </ContactRoot>
      {/* <Whitepaper /> */}
    </Root>
  );
};

export default Contact;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  width: 100%;
  align-items: flex-start;
  gap: 64px;
`;

const Line = styled.a`
  &:hover {
    color: var(--primary) !important;
  }
  cursor: pointer;
`;

const ContactRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  margin: auto;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;
const Element7 = styled.div`
  box-shadow: var(--box-shadow);
  flex: 1 1 334px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
  align-items: start;
  border-radius: 10px;
  padding: 26px 29px;
  margin: auto;
`;
const Paragraph = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 24.57px;
  text-transform: capitalize;
  color: var(--text-secondary);
  padding-left: 16px;
`;
const Image1 = styled(LazyLoadImage)`
  cursor: pointer;
  color: red;
`;
const Message = styled.form`
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  gap: 23px;
  justify-content: flex-start;
  align-items: start;
  align-self: flex-end;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  flex: 1 1 365px;
`;
const LeaveYourMessage = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--primary);
  display: contents;
`;
const Text13 = styled(Button)`
  display: flex;
  font-size: 15px;
  font-weight: 700;
  line-height: 21px;
  color: #ffffff;
  width: 100%;
  background-image: linear-gradient(180deg, #fe983f 0%, #ff551f 100%);
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  padding: 15px 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    color: var(--text-secondary);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
  flex: 2 2 65%;
`;
const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
  width: 100%;
`;
const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
  width: 100%;
  flex-wrap: wrap;
`;
const Boxes1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
  width: 100%;
  flex-wrap: wrap;
  padding-left: 16px;
`;
const Riphoneline = styled(LazyLoadImage)`
  width: 30px;
  height: 30px;
`;
const Text1 = styled.div`
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 16px;
`;
const Text3 = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  color: var(--text-primary);
  align-self: flex-start;
  margin: 0px 0px 14px 0px;
`;
const Text4 = styled.p`
  font-size: 12.4px;
  line-height: 22.69px;
  text-transform: lowercase;
  color: var(--text-secondary);
  margin: ${(props) => props.margin};
`;
const Text9 = styled.p`
  font-size: 13.5px;
  font-weight: 400;
  color: var(--text-primary);
`;
const WhiteRectangle = styled(Input)`
  box-shadow: var(--box-shadow);
  width: 100%;
  background-color: #f0f0f3;
  border-radius: 5px;
  height: ${(props) => props.height};
  padding: 8px;
  box-sizing: border-box;
`;
const Title13 = styled.div`
  width: 100%;
  height: 27px;
  position: relative;
`;
const BgItem = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: var(--box-shadow-background);
  box-shadow: var(--box-shadow);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    bottom: 0px;
    left: 0px;
    border-radius: 50%;
    background: var(--secondary);
  }
`;
const Text70 = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--text-primary);
  top: 0px;
  left: var(--x3);
  position: absolute;
`;
