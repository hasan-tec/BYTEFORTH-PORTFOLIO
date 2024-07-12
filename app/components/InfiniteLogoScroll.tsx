import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/Amazon_logo.svg', alt: 'Amazon' },
  { src: '/2560px-Upwork-logo.svg.png', alt: 'Upwork' },
  { src: '/microsoft-logo.svg', alt: 'Microsoft' },
  { src: '/Google-Logo.wine.png', alt: 'Google' },
  { src: '/Vercel_logo_black.svg.png', alt: 'Vercel' },
];

const InfiniteLogoScroll: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-10">
      <div className="text-center text-sm text-gray-400 mb-4">
        You&apos;re in good hands:
      </div>
      <div className="flex justify-center items-center">
        <div className="flex animate-scroll space-x-8">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-48">
              <Image src={logo.src} alt={logo.alt} width={150} height={50} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoScroll;
