import React from 'react';
import { FaVideo, FaEdit, FaShareSquare } from 'react-icons/fa';

const ThreeStepProcess: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="container mx-auto">
        <p className="text-gray-400 text-center text-sm mb-4">Our Process</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
        Our simple <span className="text-purple-500">3-step process</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Whether it's short-form videos, long-form content, or engaging ads, we handle it all to boost your online presence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center bg-[#0d0d0d] rounded-xl p-8 space-y-6 text-white shadow-lg">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 flex items-center justify-center">
            <FaVideo className="text-white text-3xl" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Record</h3>
          <p className="text-gray-400 text-center px-4">
            Record your content and we'll guide you with effective video ideas and scripts for maximum engagement.
          </p>
        </div>
        <div className="text-center bg-[#0d0d0d] rounded-xl p-8 space-y-6 text-white shadow-lg">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 flex items-center justify-center">
            <FaEdit className="text-white text-3xl" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Edit</h3>
          <p className="text-gray-400 text-center px-4">
            Our experts transform your recordings into polished, goal-oriented videos ready for daily posting.
          </p>
        </div>
        <div className="text-center bg-[#0d0d0d] rounded-xl p-8 space-y-6 text-white shadow-lg">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 flex items-center justify-center">
            <FaShareSquare className="text-white text-3xl" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Publish</h3>
          <p className="text-gray-400 text-center px-4">
            Sit back as we distribute your videos across all platforms, driving engagement and conversions.
          </p>
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-primary text-white py-3 px-8 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105">
          Book a 30-min call →
        </button>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
