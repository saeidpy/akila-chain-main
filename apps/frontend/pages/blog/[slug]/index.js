import parse from "html-react-parser";
import { useRouter } from "next/router";
import React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import Divider from "../../../components/Common/Divider";
import Header from "../../../components/Header";
import Image from "../../../components/Image";
import Seo from "../../../components/Seo";
import Whitepaper from "../../../components/Common/Whitepaper";
import { fetchAPI } from "../../../lib/api";
export async function getServerSideProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params?.slug,
    },
    populate: ["cover", "categories", "author.picture"],
  });

  const getRecentArticle = await fetchAPI("/articles", {
    sort: "publishedAt:desc",
    pagination: { withCount: true, pageSize: 4 },
  });

  const recentArticle = getRecentArticle?.data?.filter(
    (item) => item?.attributes?.slug !== params?.slug
  );

  if (!articlesRes?.data?.[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article: articlesRes?.data?.[0] ?? {}, recentArticle },
  };
}
const BlogDetails = ({ article, recentArticle, global }) => {
  const { push } = useRouter();

  const handleBlogClick = (article) => {
    push(`/blog/${article?.attributes?.slug}`);
  };

  const seo = {
    meta_title: article?.attributes.title,
    meta_description: article?.attributes.description,
    og_type: "article",
    ...(article?.attributes?.blog_seo ?? {}),
  };
  return (
    <BlogRoot>
      <Seo seo={seo} />
      <Header
        title="News"
        des="Here you can get the latest news"
        leftElement={
          <Text9>
            <Text09>Latest</Text09>
            <Text10>Announcement</Text10>
            <Text10>Information</Text10>
          </Text9>
        }
      />
      <BigPost>
        <Title gap={"16px"}>
          <Title1 gap={"8px"}>
            <Text11>{article?.attributes?.title}</Text11>
            <Text12>
              <Moment format="MMM D, YYYY">
                {article?.attributes?.publishedAt}
              </Moment>
            </Text12>
          </Title1>
          <WhiteFlexColumn>
            <ImageArticle image={article?.attributes?.cover} />
            <Content>{parse(article?.attributes?.content ?? "")}</Content>
          </WhiteFlexColumn>
        </Title>
        <Content gap={"53px"}>
          <Content gap={"40px"}>
            <Title13>
              <BgItem />
              <Text70>Recent News</Text70>
            </Title13>
            <Content gap={"15px"}>
              {recentArticle?.slice(0, 3).map((item) => (
                <>
                  <ContentItem
                    gap={"17px"}
                    onClick={() => handleBlogClick(item)}
                  >
                    <Paragraph4>{item?.attributes?.title}</Paragraph4>
                    <Text16>
                      <Moment format="MMM D, YYYY">
                        {item?.attributes?.publishedAt}
                      </Moment>
                    </Text16>
                  </ContentItem>
                  <Divider />
                </>
              ))}
            </Content>
          </Content>
          <Content gap={"55px"}>
            <Title13>
              <BgItem />
              <Text70>Tag cloud</Text70>
            </Title13>
            <Tags>
              {article?.attributes?.categories?.data?.map((item) => (
                <WhiteText key={item} padding={"16px 30px"}>
                  {item?.attributes?.name}
                </WhiteText>
              ))}
            </Tags>
          </Content>
        </Content>
      </BigPost>
      <Whitepaper like={global?.attributes?.WhitePaper} />
    </BlogRoot>
  );
};

export default BlogDetails;

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
  max-width: 100%;
  width: 100%;
  overflow: hidden;
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
const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: start;
  padding: 16px;
  border-radius: 10px;
  flex: 1;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: var(--borders);
  }
`;
const ImageArticle = styled(Image)`
  border-radius: 10px 10px 0px 0px;
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
  max-width: 724px;
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
  flex-direction: row;
  gap: 22px;
  justify-content: start;
  width: 100%;
  flex-wrap: wrap;
`;
