import parse from "html-react-parser";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import Header from "../../../components/Header";
import Image from "../../../components/Image";
import Seo from "../../../components/Seo";
import Whitepaper from "../../../components/Whitepaper";
import { fetchAPI } from "../../../lib/api";

export async function getServerSideProps({ params }) {
  const projects = await fetchAPI("/projects", {
    filters: {
      slug: params?.slug,
    },
    populate: "*",
  });

  return { props: { project: projects?.data[0] } };
}

const ProjectDetails = ({ project }) => {
  const seo = {
    meta_title: project?.attributes?.title,
    meta_description: project?.attributes?.description,
    og_type: "Project",
  };
  return (
    <BlogRoot>
      <Seo seo={seo} />
      <Header title="Project" des={project?.attributes?.title} />
      <Title gap={"16px"}>
        <Image1 image={project?.attributes?.image} />
        <Content>
          <Text13>{project?.attributes?.title}</Text13>
          {parse(project?.attributes?.content)}
        </Content>
      </Title>
      <Whitepaper />
    </BlogRoot>
  );
};

export default ProjectDetails;

const BlogRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;
  gap: 32px;
  width: 100%;
  align-items: center;
`;
const Text9 = styled.p`
  display: flex;
  gap: 32px;
`;
const Text09 = styled.p`
  text-align: right;
  font-size: 16px;
  text-decoration: underline;
  font-weight: 600;
  color: var(--primary);
`;
const Text10 = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: var(--text-secondary);
  white-space: pre-wrap;
`;
const BigPost = styled.div`
  display: flex;
  flex-direction: row;
  gap: 29px;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Text11 = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: var(--primary);
`;
const WhiteFlexColumn = styled.div`
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 23px;
  align-items: center;
  border-radius: 10px;
  width: fit-content;
`;
const Image1 = styled(Image)`
  width: 100%;
  /* max-width: 724px; */
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: start;
  padding: 16px;
  border-radius: 10px;
  flex: 1;
  width: 100%;
`;
const Text13 = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 31.59px;
  color: var(--text-primary);
`;
const Dots = styled(LazyLoadImage)`
  width: 6px;
  height: 66px;
  align-self: flex-end;
  margin: 0px 0px 10px 0px;
`;
const Paragraph1 = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 29.09px;
  text-transform: capitalize;
  color: var(--text-secondary);
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
  flex: 2;
  border-radius: 10px;
  width: 100%;
  /* max-width: 724px; */
`;
const Title1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  align-self: flex-start;
  gap: ${(props) => props.gap};
`;
const Text12 = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-primary);
`;
const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24.57px;
  color: var(--text-secondary);
`;
const WhiteText = styled.div`
  text-align: center;
  box-shadow: var(--box-shadow);
  display: flex;
  font-size: 17.42px;
  font-weight: 300;
  letter-spacing: 0.44px;
  color: #212135;
  width: fit-content;
  flex-direction: row;
  border-radius: 5px;
  padding: 16px;
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

const Paragraph3 = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 25.48px;
  text-transform: capitalize;
  color: var(--text-secondary);
`;
const Paragraph4 = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22.08px;
  text-transform: capitalize;
  color: var(--text-primary);
`;
const Text16 = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  color: #959595;
`;
const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  width: 100%;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 18px;
  align-items: center;
`;
