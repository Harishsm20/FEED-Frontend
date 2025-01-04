import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '../service/authService';
import { CustomSlider } from '../components';

const Home = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(() => sessionStorage.getItem('isVerified') === 'true');

  useEffect(() => {
    const verifyUserToken = async () => {
      if (isVerified) return;

      try {
        await verifyToken();
        setIsVerified(true);
        sessionStorage.setItem('isVerified', 'true');
      } catch (error) {
        console.error('Token verification failed:', error);
        navigate('/login');
      }
    };

    verifyUserToken();
  }, [isVerified, navigate]);

  return <div>{isVerified ? <CustomSlider /> : <p>Loading...</p>}</div>;
};

export default Home;
