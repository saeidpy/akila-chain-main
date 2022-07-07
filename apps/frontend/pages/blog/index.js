import { useRouter } from "next/router";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Moment from "react-moment";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { Button } from "../../components/Common/Button";
import Divider from "../../components/Common/Divider";
import Header from "../../components/Header";
import Image from "../../components/Image";
import Seo from "../../components/Seo";
import { fetchAPI } from "../../lib/api";

export async function getServerSideProps({ query }) {
  const articles = await fetchAPI("/articles", {
    populate: ["cover", "categories"],
    sort: "publishedAt:desc",
    pagination: { withCount: true, pageSize: 5, page: query?.page || 1 },
  });
  return {
    props: {
      articles,
    },
  };
}

const Blog = ({ articles }) => {
  const { push } = useRouter();
  const [select, setSelect] = useState(0);

  const metaData = articles?.meta;
  const mapData = articles?.data;
  const isFirstPage = metaData?.pagination?.page === 1;
  const firstArticle = isFirstPage && mapData?.[0];
  const handlePageClick = ({ selected }) => {
    push(`/blog?page=${selected + 1}`);
  };
  const handleBlogClick = (article) => {
    push(`/blog/${article?.attributes?.slug}`);
  };

  const seo = {
    metaTitle: "Blog",
    ogType: "blog",
  };
  return (
    <BlogRoot>
      <Seo seo={seo} />
      <Header
        title="News"
        des="Here you can get the latest news"
        leftElement={
          <Text9>
            <Text09 select={select === 0} onClick={(e) => setSelect(0)}>
              Latest
            </Text09>
            <Text09 select={select === 1} onClick={(e) => setSelect(1)}>
              Announcement
            </Text09>
            <Text09 select={select === 2} onClick={(e) => setSelect(2)}>
              Information
            </Text09>
          </Text9>
        }
      />
      {isFirstPage && (
        <BigPost>
          <Title
            gap={"16px"}
            onClick={() => {
              handleBlogClick(firstArticle);
            }}
          >
            <Title1 gap={"8px"}>
              <Text11>{firstArticle?.attributes?.title}</Text11>
              <Text12>
                <Moment format="MMM D, YYYY">
                  {firstArticle?.attributes?.publishedAt}
                </Moment>
              </Text12>
              <WhiteFlexColumn>
                <Image1 image={firstArticle?.attributes?.cover} />
                <Content>
                  <Text13>{firstArticle?.attributes?.title}</Text13>
                  <Paragraph>{firstArticle?.attributes?.description}</Paragraph>
                </Content>
              </WhiteFlexColumn>
            </Title1>
          </Title>
          {/* //TODO:FIXME remove recent news in blog */}
          {/* <Images1>
            <Text11>Recent news</Text11>
            <Image2 alt="picture" src={"/assets/img/picture4.png"} />
            <Image2 alt="picture" src={"/assets/img/picture5.png"} />
            <Image2 alt="picture" src={"/assets/img/picture6.png"} />
          </Images1> */}
        </BigPost>
      )}
      <Posts>
        <Divider />
        {mapData?.map((article, index) => {
          if (isFirstPage && index === 0) {
            return <></>;
          }
          return (
            <>
              <Main
                onClick={() => {
                  handleBlogClick(article);
                }}
              >
                <ItemBlogImage image={article?.attributes?.cover} />
                <Title gap={"18px"}>
                  <Title2 gap={"9px"}>
                    <Text14>{article?.attributes?.title}</Text14>
                    <Text12>
                      <Moment format="MMM D, YYYY">
                        {article?.attributes?.publishedAt}
                      </Moment>
                    </Text12>
                  </Title2>
                  <Paragraph>{article?.attributes?.description}</Paragraph>
                </Title>
              </Main>
              <Divider />
            </>
          );
        })}
      </Posts>
      <Pagnation>
        <CustomReactPaginate
          breakLabel="..."
          nextLabel={
            <RightArrow1 alt="left arrow" src={"/assets/icon/leftArrow2.svg"} />
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={metaData?.pagination?.pageCount}
          forcePage={metaData?.pagination?.page - 1}
          previousLabel={
            <RightArrow
              alt="right arrow"
              src={"/assets/icon/rightArrow2.svg"}
            />
          }
        />
      </Pagnation>
    </BlogRoot>
  );
};
export default Blog;

const CustomReactPaginate = styled(ReactPaginate)`
  display: flex;
  gap: 16px;
  li {
    list-style-type: none;
  }
  li a {
    text-align: center;
    display: flex;
    font-size: 17.42px;
    font-weight: 400;
    letter-spacing: 0.44px;
    color: #212135;
    width: 48px;
    height: 48px;
    flex-direction: row;
    border-radius: 5px;
    padding: 18px;
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
    &:hover {
      text-decoration: none;
      box-shadow: var(--hover-box-shadow);
      background: var(--box-shadow-background);
    }
  }
  li.selected a {
    background-color: var(--primary);
    color: #ffffff !important;
  }
  li.previous a {
    position: absolute;
    right: 64px;
  }
  li.next a {
    position: absolute;
    right: 0;
  }
`;

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
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  font-weight: ${({ select }) => (select ? "600" : "300")};
  color: ${({ select }) => (select ? "#0055ff" : "rgba(0, 0, 0, 0.5)")};
  text-decoration: ${({ select }) => (select ? "underline" : "")};
  white-space: pre-wrap;
`;
const BigPost = styled.div`
  display: flex;
  flex-direction: row;
  gap: 29px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
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
  gap: 12px;
  align-items: flex-start;
  border-radius: 10px;
  width: fit-content;
`;
const Image1 = styled(Image)`
  width: 100%;
  max-width: 724px;
  border-radius: 10px 10px 0px 0px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: start;
  padding: 16px;
  border-radius: 10px;
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
const ItemBlogImage = styled(Image)`
  flex: 1;
`;
const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
`;
const Pagnation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  gap: 32px;
  flex-wrap: wrap;
  position: relative;
`;
const WhiteFlexRow = styled(Button)`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 16px;
`;
const RightArrow = styled(LazyLoadImage)`
  width: 7px;
  height: 12px;
`;
const RightArrow1 = styled(LazyLoadImage)`
  width: 6.97px;
  height: 12.2px;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Element1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  gap: ${(props) => props.gap};
  flex-wrap: wrap;
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
`;
const Title1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  align-self: center;
  border-radius: 10px;
  gap: ${(props) => props.gap};
  cursor: pointer;
  &:hover {
    background-color: var(--borders);
  }
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
const Image2 = styled(LazyLoadImage)`
  max-width: 335px;
  width: 100%;
  height: 227px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  gap: 33px;
  justify-content: flex-start;
  align-items: center;
  top: 29px;
  cursor: pointer;
  flex-wrap: wrap;
  width: 100%;
  &:hover {
    background-color: var(--borders);
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Image5 = styled(Image)`
  max-width: 368px;
  width: 100%;
  height: 149px;
`;
const Title2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  align-self: flex-start;
  margin: 0px 0px 0px 1px;
  gap: ${(props) => props.gap};
`;
const Text14 = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary);
`;
const WhiteText = styled(Button)`
  text-align: center;
  display: flex;
  font-size: 17.42px;
  font-weight: 400;
  letter-spacing: 0.44px;
  color: #212135;
  width: 48px;
  height: 48px;
  flex-direction: row;
  border-radius: 5px;
  padding: 18px;
  background-color: ${({ selected }) => selected && "var(--primary)"};
  color: ${({ selected }) => (selected ? "#ffffff" : "#212135)")};
`;
const WhiteText1 = styled.div`
  text-align: center;
  display: flex;
  font-size: 17.42px;
  font-weight: 300;
  letter-spacing: 0.44px;
  color: #212135;
  box-shadow: var(--box-shadow);
  width: 45px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  padding: 16px;
`;
