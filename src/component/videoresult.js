import React from 'react';

function VideoResults({ videoData }) {
  return (
    <div className="video-results">
      <h2>Analysis Results</h2>
      <p>Subscriber Count: {videoData.subscriberCount}</p>
      <p>Likes: {videoData.likes}</p>
      <p>Comments: {videoData.comments}</p>
      <p>Views: {videoData.views}</p>
      <p>Earnings: {videoData.earnings}</p>
    </div>
  );
}

export default VideoResults;

