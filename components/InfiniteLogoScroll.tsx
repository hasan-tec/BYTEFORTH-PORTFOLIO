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
    <div className="w-full overflow-hidden bg-black py-10 md:py-20">
      <div className="text-center text-xs md:text-sm text-gray-400 mb-6 md:mb-8">
        You&apos;re in good hands:
      </div>
      <div className="relative flex items-center">
        <div className="whitespace-nowrap flex animate-marquee space-x-6 md:space-x-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-16 md:h-28 mx-4 md:mx-6">
              <Image src={logo.src} alt={logo.alt} width={120} height={40} objectFit="contain" />
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex whitespace-nowrap animate-marquee2 space-x-6 md:space-x-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-16 md:h-28 mx-4 md:mx-6">
              <Image src={logo.src} alt={logo.alt} width={120} height={40} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoScroll;
