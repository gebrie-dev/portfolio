import React from "react";

export default function About() {
  return (
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-br from-rose-600 to-indigo-600 bg-clip-text text-transparent">
            Hi, I'm Gebre.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps with React .
          </h1>
          <p className="mb-8 leading-relaxed ">
            As a dedicated software engineer, I enjoy tackling challenges and creating robust solutions. 
             passion for coding goes beyond the basics; it's about crafting elegant and efficient code that makes a difference. I believe in continuous learning and staying updated with the latest technologies to deliver top-notch results. Let's collaborate on your next project and turn ideas into reality.
          </p>

          <div className="mb-4">
            <h2 className="text-xl font-medium text-white mb-2">Education</h2>
            <p className="text-gray-400">Currently enrolled in software engineering.</p>
          </div>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="12 8 12 12 14 14" />  <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /></svg>
              Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Developer coding"
            src="./mern_stack.svg"
          />
        </div>
      </div>
    </section>
  );
}
