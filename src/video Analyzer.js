import React, { useState } from 'react';
import './App.css';
import Header from './component/header';
import VideoInput from './component/videoinput';
import LoadingIndicator from './component/loadingindicator';
import VideoResults from './component/videoinput';
import ErrorMessage from './component/errormessage';

//import LoaderPage from './Pages/LoaderPage';

import { analyzeVideo } from './api/api';

function App() {
  const [videoLink, setVideoLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAnalyze = async (videoLink) => {
    setIsLoading(true);
    setVideoData(null);
    setErrorMessage('');

    try {
      const data = await analyzeVideo(videoLink);
      setVideoData(data);
    } catch (error) {
      setErrorMessage('An error occurred while analyzing the video.');
    } finally {
      setIsLoading(false);
    }
  };


  
  return (
    <div className="App">
      <Header />
      <VideoInput onAnalyze={handleAnalyze} />
      {isLoading && <LoadingIndicator />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {videoData && <VideoResults videoData={videoData} />}
    </div>
  );
}

export default App;
