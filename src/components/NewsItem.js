import React, { Component } from "react";
import { Badge, Card } from "react-bootstrap";
import PropTypes from 'prop-types'

export class NewsItem extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
    url: PropTypes.string,
  }

  static defaultProps = {
    title: "No Title",
    description: "No Description",
    urlToImage: "https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900031/86481591-nouvelles-nouvelles-world-global-tv-news-design-de-banni%C3%A8re.jpg",
    publishedAt: "",
    url: "",
  }

  render() {
    let { title, description, urlToImage, publishedAt, url, author, source } = this.props;

    let calcTime = {
      publishedTime: new Date(publishedAt).toLocaleString(),
      currentTime: new Date().toLocaleString(),
      timeDiff: Math.abs(new Date(publishedAt).getTime() - new Date().getTime()),
      timeDiffInMinutes: Math.abs(
        Math.round((new Date(publishedAt).getTime() - new Date().getTime()) / 60000)
      ),
      timeDiffInHours: Math.abs(
        Math.round((new Date(publishedAt).getTime() - new Date().getTime()) / 3600000)
      ),
      timeDiffInDays: Math.abs(
        Math.round((new Date(publishedAt).getTime() - new Date().getTime()) / 86400000)
      ),
    };

    let timeDifference = `${calcTime.timeDiffInDays} days ago`;

    if (calcTime.timeDiffInHours < 24) {
      timeDifference = `${calcTime.timeDiffInHours} hours ago`;
    } else if (calcTime.timeDiffInMinutes < 60) {
      timeDifference = `${calcTime.timeDiffInMinutes} minutes ago`;
    }

    return (
      <Card style={{ margin: "auto" }}>
        <Card.Img
          variant='top'
          style={{ height: "15rem", width: "100%" }}
          src={
            !urlToImage
              ? "https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900031/86481591-nouvelles-nouvelles-world-global-tv-news-design-de-banni%C3%A8re.jpg"
              : urlToImage
          }
        />
        <Card.Body>
          <Badge bg="primary" style={{margin: "0 0 1rem 0"}}>{!source ? "No Source" : source}</Badge>
          <Card.Title>{!title ? "No Title" : title}</Card.Title>
          <Card.Text>{!description ? "No Description" : description}</Card.Text>
          <Card.Link href={url} target='_blank'>
            Read More..
          </Card.Link>
        </Card.Body>
        <Card.Footer className="d-md-flex justify-content-between">
          <small className='text-muted'>Author : {!author ? "Unknown" : author}</small>
          <small className='text-muted'>Last updated {timeDifference}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default NewsItem;
