import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-[#0d0d0d] rounded-3xl p-8 space-y-4 text-white backdrop-blur-sm bg-opacity-75">
    <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
    <p className="text-sm text-center text-gray-300">{description}</p>
  </div>
);

const ServicesComponent: React.FC = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 text-center text-sm mb-4">Our Services</p>
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          How can we <span className="text-purple-500">help you</span>?
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          From websites to mobile apps, automation,
          and more, we&apos;ve got you covered on every front.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            title="Web Development" 
            description="Build awesome websites that look great and work perfectly on all devices."
          />
          <ServiceCard 
            title="Mobile Apps" 
            description="Create cool mobile apps for both iOS and Android to reach more users."
          />
          <ServiceCard 
            title="Automation" 
            description="Automate tasks to save time and make your life easier."
          />
          <ServiceCard 
            title="Digital Marketing" 
            description="Boost your online presence with effective digital marketing strategies."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
