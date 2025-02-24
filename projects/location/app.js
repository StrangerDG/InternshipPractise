import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [ownerId, setOwnerId] = useState('');
  const [locationSent, setLocationSent] = useState(false);

  // Generate a unique ID for the owner
  const generateOwnerId = async () => {
    const response = await axios.post('http://localhost:5000/generate-id');
    setOwnerId(response.data.ownerId);
  };

  // Send location to the backend
  const sendLocation = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await axios.post(`http://localhost:5000/track/${ownerId}`, {
          latitude,
          longitude,
        });
        setLocationSent(true);
      },
      (error) => {
        console.error('Error getting location', error);
      }
    );
  };

  // Generate owner ID on component mount
  useEffect(() => {
    generateOwnerId();
  }, []);

  return (
    <div className="App">
      <h1>Click the Image to Share Your Location</h1>
      <img
        src="https://via.placeholder.com/300" // Replace with your image URL
        alt="Click me"
        style={{ cursor: 'pointer', width: '300px', height: '300px' }}
        onClick={sendLocation}
      />
      {locationSent && <p>Location sent successfully!</p>}
    </div>
  );
};

export default App;