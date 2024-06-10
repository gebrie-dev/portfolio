import React, { useState } from "react";
import { TerminalIcon, UsersIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap justify-center items-center relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-4 md:w-1/2 w-full absolute top-0 left-0 transition-transform duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none -translate-x-full"
                }`}
            >
              <div className="h-full bg-gradient-to-bl from-green-700 to-indigo-600 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center mb-4">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                  <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                  <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                  <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-800 rounded-full text-gray-400 w-8 h-8 flex items-center justify-center focus:outline-none z-10"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-100 top-1/2 transform -translate-y-1/2 bg-pink-800 rounded-full text-gray-400 w-8 h-8 flex items-center justify-center focus:outline-none z-10"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto text-center z-20 relative flex flex-col md:flex-row justify-center items-center">
        <div className="max-w-md mx-auto md:mr-6 mb-8 md:mb-0">
          <h2 className="text-2xl font-medium text-white mb-4">Leave Your Feedback</h2>
          <textarea
            rows="4"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-6 transition-colors duration-200 ease-in-out mb-4"
            placeholder="Your feedback..."
          />
          <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
           <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="10" y1="14" x2="21" y2="3" />  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
            
          </button>
        </div>
      </div>
    </section>
  );
}
