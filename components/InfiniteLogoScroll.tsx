import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/Amazon_logo.svg', alt: 'Amazon' },
  { src: '/2560px-Upwork-logo.svg.png', alt: 'Upwork' },
  { src: '/microsoft-logo.svg', alt: 'Microsoft' },
  { src: '/Google-Logo.wine.png', alt: 'Google' },
];

const InfiniteLogoScroll: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-20">
      <div className="text-center text-sm text-gray-400 mb-8">
        You&apos;re in good hands:
      </div>
      <div className="relative flex overflow-x-hidden overflow-y-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 flex items-center justify-center h-28">
              <Image src={logo.src} alt={logo.alt} width={150} height={50} objectFit="contain" />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 flex items-center justify-center h-28">
              <Image src={logo.src} alt={logo.alt} width={150} height={50} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoScroll;
