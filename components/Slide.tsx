import React from 'react';

interface SlideProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ imageUrl, title, subtitle, isActive }) => {
  return (
    <div
      className={`w-full h-screen ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-500 ease-in-out absolute top-0 left-0`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-left w-[50%]">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className='mt-3' >{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
