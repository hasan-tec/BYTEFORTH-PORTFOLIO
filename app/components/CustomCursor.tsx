'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let posX = window.innerWidth / 2;
    let posY = window.innerHeight / 2;
    let followerX = posX;
    let followerY = posY;

    const moveCursor = (e: MouseEvent) => {
      posX = e.clientX;
      posY = e.clientY;
    };

    const updateFollower = () => {
      followerX += (posX - followerX) * 0.2;
      followerY += (posY - followerY) * 0.2;

      gsap.set(cursor, { x: posX, y: posY });
      gsap.set(follower, { x: followerX, y: followerY });

      requestAnimationFrame(updateFollower);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    requestAnimationFrame(updateFollower);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ${
          isClicking ? 'scale-50' : 'scale-100'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,1) 0%, rgba(67,56,202,1) 100%)',
          boxShadow: '0 0 15px rgba(139,92,246,0.7), 0 0 30px rgba(139,92,246,0.5)',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
      <div
        ref={followerRef}
        className={`fixed w-10 h-10 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ${
          isClicking ? 'scale-150' : 'scale-100'
        }`}
        style={{
          border: '2px solid rgba(139,92,246,0.7)',
          boxShadow: '0 0 20px rgba(139,92,246,0.3)',
          backdropFilter: 'blur(2px)',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
