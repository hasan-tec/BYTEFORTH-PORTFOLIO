'use client'
import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let posY = window.scrollY;
    let followerY = posY;

    const updateScroll = () => {
      posY = window.scrollY;
      gsap.to(scrollContainer, {
        y: -posY,
        ease: 'power3.out',
        overwrite: 'auto'
      });
      requestAnimationFrame(updateScroll);
    };

    requestAnimationFrame(updateScroll);

    const handleResize = () => {
      document.body.style.height = `${scrollContainer.scrollHeight}px`;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
