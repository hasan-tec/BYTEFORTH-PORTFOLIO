import React from 'react';
import Testimonial from './Testimonial';

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 text-center text-sm mb-4">Our Clients</p>
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Hear it directly from <span className="text-purple-500">our clients.</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Hear what our clients have to say. Our testimonials reflect 
          the satisfaction our clients have in our services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Testimonial
            message="I've used Diwas and his team for 2-3 months, creating 40-50 amazing videos. They handle everything efficiently and communicate well."
            clientName="Jimmy Conover"
            clientTitle="Founder @ Scale Video Agency"
            clientImage="/pexels-blitzboy-1040880.jpg"
          />
          <Testimonial
            message="I struggled with video editors until I found Diwas and Unchained. Our first video got 80 thousand views, transforming my channel."
            clientName="Yasir Khan"
            clientTitle="Speaking Coach"
            clientImage="/pexels-jack-winbow-460463-1559486.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
