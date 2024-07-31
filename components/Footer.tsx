import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">ByteForth</h2>
          <p className="text-gray-400 mb-4">
            Join our newsletter for the latest updates and offers.
          </p>
          <form className="flex items-center">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="px-4 py-3 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:bg-gray-700"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-purple-600 text-white rounded-r-md hover:bg-purple-500 focus:outline-none"
            >
              Get Notified
            </button>
          </form>
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-16">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Results</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Comparison</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Process</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p className="text-gray-400">© 2024 Unchained. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
