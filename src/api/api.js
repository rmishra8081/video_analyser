// api.js

const API_BASE_URL = '/api'; // Replace with your actual API base URL

// Function to analyze a video by sending a POST request to the server
export const analyzeVideo = async (videoLink) => { // Corrected parameter here
  try {
    const response = await fetch(`${API_BASE_URL}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ videoLink }), // Use the passed videoLink parameter
    });

    if (!response.ok) {
      throw new Error('An error occurred while fetching data.');
    }

    return await response.json();
  } catch (error) {
    throw new Error('An error occurred while processing the request.');
  }
};
