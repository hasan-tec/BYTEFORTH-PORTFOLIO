import React from 'react';
import Card from './Card';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const rave = [
  {
    name: 'Mena Mikhail',
    position: 'Founder @ Human Voice Over',
    feedback: 'Awesome work! Never once left the loop for any revisions, and made sure end video was exactly what we were looking for.',
    image: '/pexels-sulimansallehi-1704488.jpg'
  },
  {
    name: 'Inge von Aulock',
    position: 'Founder @ Penfriend',
    feedback: 'Working with Diwas was seamless. The quality was incredible, with versatile video and animation. It’s a one-stop shop. Excited for a long-term partnership.',
    image: '/pexels-andrewpersonaltraining-697509.jpg'
  }
];

const Rave: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <p className="text-gray-400 text-center text-sm mb-4">Testimonials</p>
        <h2 className="text-4xl font-bold mt-4">There&apos;s a reason people <span className="text-purple-500">are raving</span> about us.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rave.map((testimonial, index) => (
          <Card 
            key={index}
            title={
              <div className="flex flex-col items-center">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={40}
                  height={40}
                  className="rounded-full mb-2" 
                />
                <span className="text-sm font-bold">{testimonial.name}</span>
                <span className="text-xs text-gray-400">{testimonial.position}</span>
              </div>
            }
            items={[
              { icon: <FaQuoteLeft />, text: testimonial.feedback, textColor: 'text-purple-500' },
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default Rave;
