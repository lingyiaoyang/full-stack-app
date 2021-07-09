import React, { useState, useEffect } from 'react';
import { scrollToTop, nonBrowser } from '../utils';
import { AiOutlineArrowUp } from 'react-icons/ai';

const UpIcon = () => {
  useEffect(() => {
    nonBrowser();
  }, []);
  const [showScroll, setShowScroll] = useState(false);

  if (!showScroll && window.pageYOffset > 400) {
    setShowScroll(true);
  } else if (showScroll && window.pageYOffset <= 400) {
    setShowScroll(false);
  }
  return (
    <>
      <AiOutlineArrowUp
        style={{
          display: showScroll ? 'flex' : 'none',
          position: 'fixed',
          border: '1px solid red',
          width: '40px',
          height: '40px',
          backgroundColor: 'green',
          borderRadius: '50%',
          left: '90%',
          bottom: '10%',
        }}
        onClick={() => scrollToTop()}
      />
    </>
  );
};

export default UpIcon;
