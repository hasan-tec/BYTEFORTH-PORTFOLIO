import React from 'react';

interface CardProps {
  title: string;
  items: { icon: React.ReactNode; text: string; textColor: string }[];
  layout?: 'default' | 'testimonial';
  children?: React.ReactNode; // Add this line to include children prop
}

const Card: React.FC<CardProps> = ({ title, items, layout = 'default', children }) => {
  return (
    <div className={`bg-[#0d0d0d] rounded-3xl p-8 space-y-6 text-white backdrop-blur-sm bg-opacity-75 ${layout === 'testimonial' ? 'text-center' : ''}`}>
      {layout === 'testimonial' ? (
        <>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="flex-shrink-0">{item.icon}</div>
              {item.text && <p className="text-gray-400">{item.text}</p>}
            </div>
          ))}
          <h3 className="mt-4">{title}</h3>
        </>
      ) : (
        <>
          <h3 className="text-center mb-4">{title}</h3>
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="flex-shrink-0">
                <span className={item.textColor}>{item.icon}</span>
              </div>
              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </>
      )}

      {/* Render the children (Accordion component) */}
      {children}
    </div>
  );
};

export default Card;
