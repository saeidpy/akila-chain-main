import parse from "html-react-parser";
import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import Image from "../../../components/Image";
import Seo from "../../../components/Seo";
import Whitepaper from "../../../components/Common/Whitepaper";
import { fetchAPI } from "../../../lib/api";

export async function getServerSideProps({ params }) {
  const projects = await fetchAPI("/projects", {
    filters: {
      slug: params?.slug,
    },
    populate: "*",
  });

  if (!projects?.data?.[0]) {
    return {
      notFound: true,
    };
  }

  return { props: { project: projects?.data[0] } };
}

const ProjectDetails = ({ project, global }) => {
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
      <Whitepaper like={global?.attributes?.WhitePaper} />
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
