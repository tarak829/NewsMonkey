import React, { Component } from "react";
import { Col, Container, Row, Button, Spinner } from "react-bootstrap";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export class News extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    this.setState({ loading: true });
    const { pageSize } = this.props;
    const { page } = this.state;
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=${pageSize}&page=${page}`
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  }

  capatalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  prevPage = () => {
    this.setState({ page: this.state.page - 1 }, () => this.updateNews());
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 }, () => this.updateNews());
  };

  componentDidMount() {
    this.updateNews();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.category !== this.props.category ||
      prevProps.country !== this.props.country ||
      prevProps.pageSize !== this.props.pageSize
    ) {
      this.updateNews();
    }
  }

  componentWillUnmount() {
    this.setState({ articles: [] });
  }

  render() {
    return (
      <div>
        <h1 className='text-center my-4'>
          NewsMonkey - Top {this.capatalize(this.props.category)} Headlines
        </h1>
        <Spinner
          animation='border'
          variant='primary'
          style={{
            display: this.state.loading ? "block" : "none",
            margin: "5rem auto",
            width: "3rem",
            height: "3rem",
          }}
        />
        <Container style={{ margin: "2rem auto" }}>
          <Row xs={1} md={3} className='g-4'>
            {!this.state.loading &&
              this.state.articles.map((article) => (
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
          <Container className='my-5 d-md-flex justify-content-between'>
            <Button disabled={this.state.page <= 1} onClick={this.prevPage} variant='outline-dark'>
              &larr; Previous
            </Button>
            <Button
              disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
              onClick={this.nextPage}
              variant='outline-dark'
            >
              Next &rarr;
            </Button>
          </Container>
        </Container>
      </div>
    );
  }
}

export default News;
