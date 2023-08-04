import React, { useState, useEffect  } from 'react';
import Slide from './Slide';
// import Slides from '@/data/slidesData';

interface SlideItem {
  imageUrl: string;
  title: string;
  subtitle: string;
}

interface SliderProps {
  slides: SlideItem[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Set up the interval to change slides
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    // Clear the interval when the component unmounts or currentIndex changes
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);


  return (
    <div className="relative overflow-hidden h-[100vh] bg-black ">
      {slides.map((slide, index) => (
        <Slide
          key={index}
          imageUrl={slide.imageUrl}
          title={slide.title}
          subtitle={slide.subtitle}
          isActive={index === currentIndex}

        />
      ))}

      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button
          className="text-white bg-black px-4 py-2 rounded-lg"
          onClick={prevSlide}
        >
          &#10094;
        </button>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          className="text-white bg-black px-4 py-2 rounded-lg"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-gray-400'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
