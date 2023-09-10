import React, { useState } from 'react';
import VideoInput from './VideoInput';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Video Engagement Analyzer</h1>
      <p>Input a video link to get engagement metrics and earnings.</p>
      <VideoInput />
    </div>
  );
}

export default LandingPage;
