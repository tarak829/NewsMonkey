import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=535c742670044e4583f074b8df6d29be&pagesize=20&page=1";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    this.setState({ articles: data.articles, totalResults: data.totalResults });
  }
  
  prevPage = async () => {
    this.setState({ loading: true });
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=535c742670044e4583f074b8df6d29be&pagesize=20&page=" +
      (this.state.page - 1);
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles, page: this.state.page - 1 });
    this.setState({ loading: false });
  };

  nextPage = async () => {
    this.setState({ loading: true });
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=535c742670044e4583f074b8df6d29be&pagesize=20&page=" +
      (this.state.page + 1);
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles, page: this.state.page + 1 });
    this.setState({ loading: false });
  };

  render() {
    return (
      <div style={{ padding: "2rem 0"}}>
        <h1 className='text-center'>NewsMonkey - Top Headlines </h1>
        <Container>
          <Row xs={1} md={3} className='g-4'>
            {this.state.articles.map((article) => (
              <Col key={article.url}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  urlToImage={article.urlToImage}
                  publishedAt={article.publishedAt}
                />
              </Col>
            ))}
          </Row>
          <Container className='d-md-flex justify-content-between'>
            <Button disabled={this.state.page<=1} onClick={this.prevPage} variant='outline-dark'>&larr; Previous</Button>
            <Button disabled={this.state.page>=Math.ceil(this.state.totalResults/20)} onClick={this.nextPage} variant='outline-dark'>Next &rarr;</Button>
          </Container>
        </Container>
      </div>
    );
  }
}

export default News;
