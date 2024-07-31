import React from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Star } from 'lucide-react';

const HeroSection = () => {
  const profileImages = [
    "/pexels-jack-winbow-460463-1559486.jpg",
    "/pexels-blitzboy-1040880.jpg",
    "/pexels-andrewpersonaltraining-697509.jpg",
    "/pexels-pixabay-34534.jpg",
    "/pexels-moh-adbelghaffar-771742.jpg",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="container mx-auto text-center px-4 relative z-10">
        <div className="flex justify-center items-center mb-4">
          <div className="flex -space-x-2">
            {profileImages.map((src, i) => (
              <Image 
                key={i} 
                src={src} 
                alt={`Profile ${i + 1}`} 
                width={48} 
                height={48} 
                className="rounded-full border-2 border-black w-12 h-12 object-cover" 
              />
            ))}
          </div>
          <div className="flex flex-col items-start ml-4 text-sm text-gray-400">
            <div className="flex mb-1">
              <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
              <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
            </div>
            <span>Trusted by 20+ brands & creators</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Ready to <span className="text-primary">scale</span> your<br />
          brand with <span className="text-primary">creativity</span>?
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
          Hire a team of top-tier professionals committed to delivering exceptional digital experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg" className="bg-purple-600 hover:bg-purple-900">Book a call</Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
