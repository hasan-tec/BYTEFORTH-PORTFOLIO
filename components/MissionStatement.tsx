import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MissionStatement: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
        Empowering Your <span className='text-primary'>Digital</span> Evolution
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
        Specializing in advanced web, mobile, and automation solutions to enhance your digital presence. 
        Our aim is to propel your brand forward with effective strategies for sustainable growth.
        </p>
        <Link href="/bookacall">
        <Button variant="default" size="lg" className="group">
        
          Schedule a Consultation
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        </Link>
      </div>
    </section>
  );
};

export default MissionStatement;