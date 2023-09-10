import React, { useState } from 'react';

function VideoInput({ onAnalyze }) {
  const [videoLink, setVideoLink] = useState('');

  const handleVideoLinkChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleAnalyzeClick = () => {
    onAnalyze(videoLink);
  };

  return (
    <div className="video-input">
      <input
        type="text"
        placeholder="Enter Video Link"
        value={videoLink}
        onChange={handleVideoLinkChange}
      />
      <button onClick={handleAnalyzeClick}>Analyze</button>
    </div>
  );
}

export default VideoInput;
