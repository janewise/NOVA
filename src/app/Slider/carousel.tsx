'use client'

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import 
import {PrevArrow, NextArrow} from './arrow'
//card component
import Card from './card';

// for carousel data
import warfront from "../../../public/Warriorfront.png";
import warback from "../../../public/warriorback.png";
import comfront from "../../../public/commanfront.png";
import comback from "../../../public/commanback.png";
import genfront from "../../../public/genfront.png";
import genback from "../../../public/genback.png";
import legfront from "../../../public/Legfront.png";
import legback from "../../../public/Legback.png";
import invfront from "../../../public/invfront.png";
import invback from "../../../public/invback.png";
import adfront from "../../../public/adfront.png";
import adback from "../../../public/adback.png";
import confront from "../../../public/confront.png";
import conback from "../../../public/conback.png";



const cardData = [
    { id: 1, front:warfront ,back: warback, },
    { id: 2, front:comfront ,back: comback, },
    { id: 3, front:genfront ,back: genback, },
    { id: 4, front:legfront ,back: legback, },
    { id: 5, front:invfront ,back: invback, },
    { id: 6, front:adfront ,back: adback, },
    { id: 7, front:confront ,back: conback, },
  ];
// up are carousel image

export default function Carousel() {

    const [slidesToShow, setSlidesToShow] = useState(4); // Default value for desktop view

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 800) {
          setSlidesToShow(4);
        }else if(window.innerWidth >= 420){
            setSlidesToShow(3);
        }
         else {
          setSlidesToShow(2);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Call once initially
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow:slidesToShow,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow slidesToShow={slidesToShow} />,
  };

  return (
    <div className="centerbox">
    <div className="carousel-container">
    <Slider {...settings}>

      {cardData.map((card) => (
        <div className='center' key={card.id}>
          <Card frontside={card.front} backside={card.back} />
        </div>
      ))}

    </Slider>
    </div>
    </div>
  );
};
