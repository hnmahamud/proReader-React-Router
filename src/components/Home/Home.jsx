import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import homeReader from '../../assets/home-reader.json';

// Home page
const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
      {/* Text Content */}
      <div>
        <div className="space-y-4">
          <div className="font-bold">
            <p className="badge bg-yellow-300 text-gray-600 border-0">On Sale!</p>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            A reader lives a thousand lives <br />
            <span className="text-blue-400">before he dies</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
        </div>
        <div className="mt-4">
          <Link to="/books">
            <button className="btn border-0 rounded-md transition-colors duration-200 bg-blue-500 hover:bg-blue-600">
              Visit Store
              <ShoppingCartIcon className="ml-2 w-5 text-gray-100" />
            </button>
          </Link>

          <Link to="/about">
            <button className="font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-600 ml-4">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Lottie Animation */}
      <div>
        <Lottie animationData={homeReader} loop />
      </div>
    </div>
  );
};

export default Home;
