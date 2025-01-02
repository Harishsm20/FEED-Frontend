import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CustomSlider } from '../components';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Verify the user's authentication status by calling the server
    const verifyToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/verify-token', {
          withCredentials: true, // Include cookies with the request
        });

        if (response.status === 200) {
          console.log('User authenticated');
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        if (error.response && error.response.status === 401) {
          navigate('/login'); // Redirect to login if unauthorized
        }
      }
    };

    verifyToken();
  }, [navigate]);

  return <CustomSlider />;
};

export default Home;
