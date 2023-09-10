import React, { useState } from 'react';

function RequestCallbackPopup() {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [preferredCallbackTime, setPreferredCallbackTime] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="request-callback-popup">
      <h2>Request Callback</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Contact Number:</label>
        <input
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <label>Preferred Callback Time:</label>
        <input
          type="text"
          value={preferredCallbackTime}
          onChange={(e) => setPreferredCallbackTime(e.target.value)}
        />
        <label>Additional Comments:</label>
        <textarea
          value={additionalComments}
          onChange={(e) => setAdditionalComments(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RequestCallbackPopup;
