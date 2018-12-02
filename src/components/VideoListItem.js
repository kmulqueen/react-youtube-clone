import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <li onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <p>{video.snippet.title}</p>
    </li>
  );
};

export default VideoListItem;
