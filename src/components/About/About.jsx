import Lottie from 'lottie-react';
import React from 'react';
import aboutReader from '../../assets/about-reader.json';

// About page
const About = () => {
  return (
    <div className="flex flex-col">
      {/* Text Content */}
      <div className="md:w-[70%] md:mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          A reader lives a thousand lives before he dies
        </h2>
        <p className="text-base text-gray-700 mt-2">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man
          who does not read good books is no better than the man who can’t.
        </p>
      </div>

      {/* Lottie Animation */}
      <div className="md:h-96">
        <Lottie className="h-full" animationData={aboutReader} loop />
      </div>
    </div>
  );
};

export default About;
