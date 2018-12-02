import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoListItem from "./components/VideoListItem";
import VideoDetail from "./components/VideoDetail";
import axios from "axios";
import _ from "lodash";
const apiKey = "AIzaSyDKBfZbMvQVthV9AvB0yiyhzTe-DyCfpbk";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.runSearch("Awesome");
  }

  runSearch = term => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: apiKey,
          part: "snippet",
          q: term,
          maxResults: 10
        }
      })
      .then(data => data.data.items)
      .then(videos => this.setState({ videos, selectedVideo: videos[0] }))
      .catch(error => console.log(error));
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const debouncedSearch = _.debounce(this.runSearch, 700);
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar runSearch={debouncedSearch} />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo} />
          </Col>
          <Col md="4">
            <VideoList>
              {this.state.videos.map(video => (
                <VideoListItem
                  video={video}
                  key={video.id.videoId}
                  onVideoSelect={this.onVideoSelect}
                />
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
