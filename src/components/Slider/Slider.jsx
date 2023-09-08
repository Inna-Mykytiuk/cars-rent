import React, { useState, useEffect } from 'react';
import { SlideContainer, Slide, SlideText, RightArrow, LeftArrow   } from './Slider.styled';



export const Slider = ({ cars }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const interval = 3000;

  const prevSlide = () => {
    const slide = activeSlide - 1 < 0 ? cars.length - 1 : activeSlide - 1;
    setActiveSlide(slide);
  }

  const nextSlide = () => {
    const slide = activeSlide + 1 < cars.length ? activeSlide + 1 : 0;
    setActiveSlide(slide);
  }

  const pause = () => {
    setAutoplay(false);
  }

  const resume = () => {
    setAutoplay(true);
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      if (autoplay) {
        nextSlide();
      }
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [autoplay, activeSlide]);

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
      <RightArrow onClick={nextSlide}><i className="fa fa-4x fa-arrow-circle-right"></i></RightArrow>
      <LeftArrow onClick={prevSlide}> <i className="fa fa-4x fa-arrow-circle-left"></i></LeftArrow>
    </SlideContainer>
  );
}
