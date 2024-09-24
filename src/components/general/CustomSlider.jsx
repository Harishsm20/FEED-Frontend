import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Images import
import { login1, login2, login3 } from '../../assets';

const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-full bg-gradient-to-r from-gray-900 to-gray-700 py-12">
      <div className="text-center mb-6">
        <h1 className="text-6xl font-bold text-white">Feed Welcomes you</h1>
        <h2 className="text-xl text-gray-300">Idea make fosters brainstorming and idea generation processes</h2>
      </div>
      <div className="w-full h-[350px] max-w-4xl min-h-11 overflow-hidden  rounded-xl">
        <Slider {...settings} className='min-h-5px'>
          <div className="relative">
            <img src={login1} alt="Image 1" className="rounded-xl shadow-lg object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
          </div>
          <div className="relative">
            <img src={login2} alt="Image 2" className="rounded-xl shadow-lg object-cover h-full w-full" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
          </div>
          <div className="relative">
            <img src={login3} alt="Image 3" className="rounded-xl shadow-lg object-cover h-full w-full" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
