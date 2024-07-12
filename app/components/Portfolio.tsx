import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PortfolioComponent: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full space-y-6">
        <p className="text-center text-sm text-gray-400">Portfolio</p>
        <h1 className="text-5xl font-bold text-center">Lara Acosta</h1>
        <p className="text-center text-gray-400">Founder @ LA Digital</p>
        
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <img src="C:\Users\Hasan\Desktop\Portfolio\Shop.png" alt="Lara Acosta" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-transparent to-green-900/80"></div>
          <div className="absolute top-1/4 left-8">
            <p className="text-red-500 font-bold text-2xl">NO CLIENTS</p>
            <p className="text-3xl font-bold bg-black/50 px-2 rounded">$0.00</p>
          </div>
          <div className="absolute top-1/4 right-8 text-right">
            <p className="text-green-500 font-bold text-2xl">CLIENT CLOSED</p>
            <p className="text-3xl font-bold bg-black/50 px-2 rounded">$5000</p>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <PlayCircle className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Button variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg">
              Linked in
            </Button>
          </div>
          <div className="absolute top-1/2 left-0 w-full">
            <svg className="w-full" height="50" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 25 Q400 0 800 25" stroke="white" fill="none" strokeWidth="2" />
              <path d="M0 25 Q400 50 800 25" stroke="white" fill="none" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-purple-900 to-blue-900">
            <img src="/api/placeholder/400/225" alt="Personal brand" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl font-bold">PERSONAL BRAND</p>
            </div>
            <PlayCircle className="absolute bottom-4 right-4 w-10 h-10 text-white" />
            <div className="absolute top-4 left-4 flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xl">in</div>
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xl">♫</div>
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xl">t</div>
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-xl">₿</div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-blue-900 to-purple-900">
            <img src="/api/placeholder/400/225" alt="60 seconds" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl font-bold">in 60 seconds</p>
            </div>
            <PlayCircle className="absolute bottom-4 right-4 w-10 h-10 text-white" />
            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <img src="/api/placeholder/32/32" alt="Profile" className="rounded-full" />
              </div>
              <p className="text-sm">Write me viral content</p>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-purple-600 rounded-full px-3 py-1 text-sm">Here's 10 new posts</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg">
            Book a 30-min call →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;