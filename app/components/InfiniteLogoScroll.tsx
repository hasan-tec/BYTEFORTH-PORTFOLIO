import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/logo-hero.png', alt: 'Hero' },
  { src: '/logo-shield.png', alt: 'Shield' },
  { src: '/logo-wen-digital.png', alt: 'Wen Digital' },
  { src: '/logo-ratcliffe-brothers.png', alt: 'Ratcliffe Brothers' },
  { src: '/logo-cerave.png', alt: 'CeraVe' },
];

const InfiniteLogoScroll: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-10">
      <div className="text-center text-sm text-gray-400 mb-4">
        You&apos;re in good hands:
      </div>
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-48 mx-8">
            <Image src={logo.src} alt={logo.alt} width={150} height={50} objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoScroll;