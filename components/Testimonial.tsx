import React from 'react';
import Card from './Card';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

interface TestimonialProps {
  message: string;
  clientName: string;
  clientTitle: string;
  clientImage: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ message, clientName, clientTitle, clientImage }) => {
  return (
    <Card
      layout="testimonial"
      title={`${clientName}, ${clientTitle}`}
      items={[
        { icon: <Image src={clientImage} alt={clientName} width={48} height={48} className="rounded-full" />, text: '', textColor: '' },
        { icon: <FaQuoteLeft />, text: message, textColor: 'text-purple-500' },
      ]}
    />
  );
};

export default Testimonial;
