'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [interacting, setInteracting] = useState(false);
  const [cursorType, setCursorType] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const animateCursor = (e: MouseEvent) => {
      const x = e.clientX - cursor.offsetWidth / 2;
      const y = e.clientY - cursor.offsetHeight / 2;

      gsap.to(cursor, {
        x,
        y,
        scale: interacting ? 4 : 1,
        duration: 0.8,
      });
    };

    const handleInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest('.interactable');
      setInteracting(!!interactable);
      if (interactable) {
        setCursorType(interactable.getAttribute('data-type') || '');
      } else {
        setCursorType('');
      }
    };

    window.addEventListener('mousemove', (e) => {
      animateCursor(e);
      handleInteraction(e);
    });

    return () => {
      window.removeEventListener('mousemove', animateCursor);
    };
  }, [interacting]);

  const getIconClass = () => {
    switch (cursorType) {
      case 'video':
        return 'fa-solid fa-play';
      case 'link':
        return 'fa-solid fa-arrow-up-right';
      default:
        return '';
    }
  };

  return (
    <div
      ref={cursorRef}
      className={`fixed w-5 h-5 bg-white rounded-full pointer-events-none z-50 flex items-center justify-center transition-opacity duration-500 ${
        interacting ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.4)',
      }}
    >
      <div
        ref={iconRef}
        className={`text-black text-xs ${getIconClass()}`}
        style={{
          opacity: interacting ? 1 : 0,
          transition: 'opacity 400ms ease',
        }}
      ></div>
    </div>
  );
};

export default CustomCursor;