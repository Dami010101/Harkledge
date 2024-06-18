import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Eunice Jola',
    testimony: 'The services provided were excellent and beyond my expectations.',
    title: 'CEO, Eunifes Joelam',
  },
  {
    name: 'Micheal Tomia',
    testimony: 'A professional team that delivers top-notch solutions.',
    title: 'GM, Braykgrand Agro',
  },
  {
    name: 'Mike Johnson',
    testimony: 'Amazing experience! Highly recommend their services.',
    title: 'Manager, MelBet',
  },
  {
    name: 'Emily Davis',
    testimony: 'They exceeded our expectations in every aspect.',
    title: 'Director, MyHeritage',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-black py-16">
      <button onClick={handlePrev} className="absolute left-5 p-2 bg-gray-800 text-white rounded-full">
        <FaChevronLeft />
      </button>

      <div className="max-w-lg p-8 bg-[#CAB43F] shadow-lg rounded-lg text-center mb-8">
        <p className="text-lg italic mb-4">"{testimonials[currentIndex].testimony}"</p>
        <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
        <p className="text-sm text-gray-800">{testimonials[currentIndex].title}</p>
      </div>

      <button onClick={handleNext} className="absolute right-5 p-2 bg-gray-800 text-white rounded-full">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Testimonials;
