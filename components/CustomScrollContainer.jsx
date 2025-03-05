import React, { useRef, useEffect, useState } from 'react';
import '../src/scrollbar.css';

const CustomScrollContainer = ({ children }) => {
  const contentRef = useRef(null);
  const thumbRef = useRef(null);
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const updateThumbPosition = () => {
    const scrollPercentage = contentRef.current.scrollTop / (contentRef.current.scrollHeight - contentRef.current.clientHeight);
    thumbRef.current.style.top = `${scrollPercentage * (trackRef.current.clientHeight - thumbRef.current.clientHeight)}px`;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.pageY || e.touches[0].pageY);
    setScrollStart(contentRef.current.scrollTop);
    thumbRef.current.classList.add('active');
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      const pageY = e.pageY || e.touches[0].pageY;
      const deltaY = pageY - startY;
      const scrollAmount = (deltaY / trackRef.current.clientHeight) * contentRef.current.scrollHeight;
      contentRef.current.scrollTop = scrollStart + scrollAmount;
      updateThumbPosition();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    thumbRef.current.classList.remove('active');
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, startY, scrollStart]);

  return (
    <div className="scroll-container">
      <div className="content" ref={contentRef} onScroll={updateThumbPosition}>
        {children}
      </div>
      <div className="custom-scrollbar">
        <div className="scrollbar-track" ref={trackRef} onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}>
          <div className="scrollbar-thumb" ref={thumbRef}></div>
        </div>
      </div>
    </div>
  );
};

export default CustomScrollContainer;