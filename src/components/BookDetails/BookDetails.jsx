import React, { useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

// Book details page
const BookDetails = () => {
  // For Loading animation
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <LoadingSpinner />;
  }

  // Back to home page
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/books');
  };

  // Single book details info card
  const singleBookData = useLoaderData();
  const { image, title, authors, publisher, year, rating, desc, price } = singleBookData;
  const [isFold, setFold] = useState(false);
  return (
    <div className="md:w-[70%] md:mx-auto grid md:grid-cols-2 card card-side rounded-md border">
      <figure><img src={image} alt="" /></figure>
      <div className="space-y-2 p-8 md:p-0 md:pt-8 md:pr-8">
        <p className="badge bg-teal-600 text-white border-0">Brand New</p>
        <h2 className="card-title">{title}</h2>
        <p>Authors: {authors}</p>
        <p>Publisher: {publisher}</p>
        <p>Year: {year}</p>
        <p>Rating: {rating}</p>
        <p>
          <span>
            {isFold ? desc : `${desc.substring(0, 100)}.....`}
          </span>
          <button onClick={() => setFold(!isFold)} className="text-blue-400">
            {isFold ? 'Read Less' : 'Read more'}
          </button>
        </p>
        <div className="card-actions flex items-center">
          <button onClick={navigateHandler} className="text-white border-0 rounded-md transition-colors duration-200 bg-blue-500 hover:bg-blue-600 px-12 py-2">
            Go Back
          </button>
          <p className="font-semibold text-blue-400 ml-4">
            Price: {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
