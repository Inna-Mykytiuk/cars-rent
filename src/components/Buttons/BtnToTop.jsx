import React, { useState, useEffect } from 'react';
import { TopButton, ToTopBtn } from './Buttons.styled';

export default function BtnToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      updateDashOffset();
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  function updateDashOffset() {
    const scrollUpSvgPath = document.getElementById('iconPath');
    if (scrollUpSvgPath) {
      const pageLength = scrollUpSvgPath.getTotalLength();

      scrollUpSvgPath.style.strokeDasharray = `${pageLength} ${pageLength}`;
      scrollUpSvgPath.style.transition = 'stroke-dashoffset 25ms';

      const currentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const dashOffset =
        pageLength - (window.scrollY * pageLength) / currentHeight;

      scrollUpSvgPath.style.strokeDashoffset = dashOffset;
    }
  }

  return (
    <TopButton hidden={!showTopBtn} id="topButton" onClick={goToTop}>
      <ToTopBtn />
    </TopButton>
  );
}
