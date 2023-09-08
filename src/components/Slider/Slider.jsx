import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import {
  SlideContainer,
  Slide,
  SlideText,
  RightArrow,
  LeftArrow,
} from './Slider.styled';

export const Slider = ({ cars }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const interval = 3000;

  const prevSlide = () => {
    const slide = activeSlide - 1 < 0 ? cars.length - 1 : activeSlide - 1;
    setActiveSlide(slide);
  };

  const nextSlide = useCallback(() => {
    const slide = activeSlide + 1 < cars.length ? activeSlide + 1 : 0;
    setActiveSlide(slide);
  }, [activeSlide, cars.length]);

  const pause = () => {
    setAutoplay(false);
  };

  const resume = () => {
    setAutoplay(true);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      if (autoplay) {
        nextSlide();
      }
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [autoplay, activeSlide, nextSlide]);

  return (
    <SlideContainer onMouseEnter={pause} onMouseLeave={resume}>
      {cars.map((car, id) => (
        <Slide
          key={car.id}
          data-active={id === activeSlide}
          style={{ backgroundImage: `url(${car.img})` }}
        >
          <SlideText>{car.make}</SlideText>
        </Slide>
      ))}
      <RightArrow onClick={nextSlide}>
        <FaArrowCircleRight style={{ width: '30px', height: '30px' }} />
      </RightArrow>
      <LeftArrow onClick={prevSlide}>
        {' '}
        <FaArrowCircleLeft style={{ width: '30px', height: '30px' }} />
      </LeftArrow>
    </SlideContainer>
  );
};
