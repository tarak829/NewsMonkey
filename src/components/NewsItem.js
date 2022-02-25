import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, publishedAt, url } = this.props;

    let calcTime = {
      publishedTime: new Date(publishedAt).toLocaleString(),
      currentTime: new Date().toLocaleString(),
      timeDiff: Math.abs(
        new Date(publishedAt).getTime() - new Date().getTime()
      ),
      timeDiffInMinutes: Math.abs(
        Math.round(
          (new Date(publishedAt).getTime() - new Date().getTime()) / 60000
        )
      ),
      timeDiffInHours: Math.abs(
        Math.round(
          (new Date(publishedAt).getTime() - new Date().getTime()) / 3600000
        )
      ),
      timeDiffInDays: Math.abs(
        Math.round(
          (new Date(publishedAt).getTime() - new Date().getTime()) / 86400000
        )
      ),
    };

    let timeDifference = `${calcTime.timeDiffInDays} days ago`;

    if (calcTime.timeDiffInHours < 24) {
      timeDifference = `${calcTime.timeDiffInHours} hours ago`;
    } else if (calcTime.timeDiffInMinutes < 60) {
      timeDifference = `${calcTime.timeDiffInMinutes} minutes ago`;
    }

    return (
      <Card style={{ width: "20rem", margin: "2rem auto" }}>
        <Card.Img
          variant='top'
          src={
            !urlToImage
              ? "https://previews.123rf.com/images/alhovik/alhovik1709/alhovik170900031/86481591-nouvelles-nouvelles-world-global-tv-news-design-de-banni%C3%A8re.jpg"
              : urlToImage
          }
        />
        <Card.Body>
          <Card.Title>{!title ? "No Title" : title.slice(0, 65)}...</Card.Title>
          <Card.Text>
            {!description ? "No Description" : description.slice(0, 100)}...
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href={url} target='_blank'>
            Read More..
          </Card.Link>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated {timeDifference}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default NewsItem;
