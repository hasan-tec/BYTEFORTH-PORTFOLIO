import React from 'react';
import Card from './Card';

const Comparison = () => {
  const otherAgencyItems = [
    { icon: '✘', text: 'Slow communication', textColor: 'text-red-500' },
    { icon: '✘', text: 'Single channel approach', textColor: 'text-red-500' },
    { icon: '✘', text: 'Outdated growth strategies', textColor: 'text-red-500' },
    { icon: '✘', text: 'Lack of industry research', textColor: 'text-red-500' },
    { icon: '✘', text: 'Outsourced to mediocre talent', textColor: 'text-red-500' },
  ];

  const ourAgencyItems = [
    { icon: '✔', text: 'Constant, proactive communication', textColor: 'text-green-500' },
    { icon: '✔', text: 'Omni-channel approach', textColor: 'text-green-500' },
    { icon: '✔', text: 'Tailored best-fit solutions', textColor: 'text-green-500' },
    { icon: '✔', text: 'Provides industry-specific expertise', textColor: 'text-green-500' },
    { icon: '✔', text: 'Experts with 4+ years of experience', textColor: 'text-green-500' },
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
      <p className="text-gray-400 text-center text-sm mb-4">Comparison</p>
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          But, why would you want to work <span className="text-purple-500">with us?</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover the key differences between our agency and others. Here's why we stand out in the industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="Other Agencies" items={otherAgencyItems} />
          <Card title="Our Agency" items={ourAgencyItems} />
        </div>
      </div>
    </section>
  );
};

export default Comparison;
