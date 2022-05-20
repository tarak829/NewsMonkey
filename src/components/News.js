import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=${props.pageSize}&page=${page}`
    );
    const data = await response.json();
    if (data.status === "ok") {
      setArticles(articles.concat(data.articles));
      setPage(page + 1);
      setLoading(false);
      setTotalResults(data.totalResults);
    } else {
      setLoading(false);
      console.log("Error: ", data.message);
      document.title = `Error - ${data.code}`;
      document.getElementById("header").innerHTML = "Error - Check logs for details";
    }
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=${props.pageSize}&page=${page + 1}`
    );
    const data = await response.json();
    setArticles(articles.concat(data.articles));
    setLoading(false);
    setTotalResults(data.totalResults);
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - ${capitalize(props.country)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 id='header' className='text-center my-4'>
        NewsMonkey - Top {capitalize(props.category)} Headlines
      </h1>
      <Spinner
        animation='border'
        variant='primary'
        style={{
          display: loading ? "block" : "none",
          margin: "5rem auto",
          width: "3rem",
          height: "3rem",
        }}
      />
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={
          <Spinner
            animation='border'
            variant='primary'
            style={{
              display: loading ? "block" : "none",
              margin: "5rem auto",
              width: "3rem",
              height: "3rem",
            }}
          />
        }
      >
        <Container style={{ margin: "2rem auto" }}>
          <Row xs={1} md={3} className='g-4'>
            {articles.map((article) => (
              <Col key={article.url}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  urlToImage={article.urlToImage}
                  publishedAt={article.publishedAt}
                  author={article.author}
                  source={article.source.name}
                  emptyImage='https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900031/86481591-nouvelles-nouvelles-world-global-tv-news-design-de-banni%C3%A8re.jpg'
                />
              </Col>
            ))}
          </Row>
        </Container>
      </InfiniteScroll>
    </div>
  );
};

export default News;

News.propTypes = {
  category: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
};
