import React from 'react';
import { useHistory } from 'react-router-dom';

function LandingPage() {
  const history = useHistory();

  const handleAnalyzeClick = () => {
    // Perform analysis and fetch data here
    
    // After analysis, navigate to the result page
    history.push('/result');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Video Engagement Analyzer</h1>
      <p>Input a video link to get engagement metrics and earnings.</p>
      <VideoInput />
      <button onClick={handleAnalyzeClick}>Analyze</button>
    </div>
  );
}

export default LandingPage;
