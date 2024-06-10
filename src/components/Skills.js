// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon, LightningBoltIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 bg-gradient-to-r from-slate-900 to-slate-700 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium bg-gradient-to-bl from-green-700 to-indigo-600 bg-clip-text text-transparent mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Explore the programming languages and technologies I've mastered for developing full-stack applications!
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full transform transition duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white transition duration-300 hover:text-blue-500 hover:font-bold">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a href="#contact" className="inline-flex items-center bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer">
            Hire Me
            <LightningBoltIcon className="w-6 h-6 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
