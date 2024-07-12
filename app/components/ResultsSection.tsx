import React from 'react';
import Image from 'next/image';

interface ResultCardProps {
  name: string;
  image: string;
  stats: string[];
}

const ResultCard: React.FC<ResultCardProps> = ({ name, image, stats }) => (
  <div className="relative overflow-hidden rounded-lg">
    <Image src={image} alt={name} width={400} height={400} className="object-cover w-full h-full" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      {stats.map((stat, index) => (
        <p key={index} className="text-sm">{stat}</p>
      ))}
    </div>
  </div>
);

const ResultsSection: React.FC = () => {
  const results = [
    {
      name: "Dr. Dustin Portela",
      image: "/dr-dustin-portela.jpg",
      stats: ["80k+ Subscribers", "Generated 10M+ Views"]
    },
    {
      name: "Craig Valentine",
      image: "/craig-valentine.jpg",
      stats: ["Generated 5M+ Views", "Added 70k+ Followers"]
    },
    {
      name: "Lara Acosta",
      image: "/lara-acosta.jpg",
      stats: ["Generated over 500k+ Views", "500k+ Impressions"]
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 mb-2">Results</p>
        <h2 className="text-5xl font-bold text-center mb-4">
          Results speak for <span className="text-purple-500">{`themselves`}</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          We&apos;ve worked across a number of industries and have achieved some 
          incredible results with some incredible people and brands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
