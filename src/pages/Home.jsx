import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { CustomSlider } from '../components';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token is available in localStorage
    const token = Cookies.get('jwt');
    console.log(token);
    
    // if (token) {
    //   // Save the token in a cookie
    //   Cookies.set('jwt', token, {
    //     expires: 1, // 1 day
    //     secure: process.env.NODE_ENV === 'production', // Only secure in production
    //     sameSite: 'Strict',
    //   });

    //   console.log('Token saved in cookies');
    // }
    if(!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <CustomSlider />
    </>
  );
};

export default Home;
