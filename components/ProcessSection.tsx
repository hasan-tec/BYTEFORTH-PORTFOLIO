import React from 'react';
import { FaLightbulb, FaHammer, FaRocket } from 'react-icons/fa';

const ThreeStepProcess: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="container mx-auto">
        <p className="text-gray-400 text-center text-sm mb-4">Our Process</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Our simple <span className="text-purple-500">3-step process</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Whether it&#39;s websites, mobile apps, or automation, we handle it all to boost your online presence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center bg-[#0d0d0d] rounded-xl p-8 space-y-6 text-white shadow-lg">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 flex items-center justify-center">
            <FaLightbulb className="text-white text-3xl" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Plan</h3>
          <p className="text-gray-400 text-center px-4">
            Share your ideas, and we&#39;ll guide you with creative concepts and strategies for maximum impact.
          </p>
        </div>
        <div className="text-center bg-[#0d0d0d] rounded-xl p-8 space-y-6 text-white shadow-lg">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 flex items-center justify-center">
            <FaHammer className="text-white text-3xl" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Create</h3>
          <p className="text-gray-400 text-center px-4">
            Our experts bring your vision to life, building polished, goal-oriented solutions ready for launch.
          </p>
        </div>
        <div className="text-center bg-[#0d0d0d] rounded-xl p-8 space-y-6 text-white shadow-lg">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 flex items-center justify-center">
            <FaRocket className="text-white text-3xl" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Launch</h3>
          <p className="text-gray-400 text-center px-4">
            Sit back as we deploy your project across all platforms, driving engagement and growth.
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
