import React from 'react';
import { Link } from 'react-router-dom';

// Book page
const Book = ({ singleBook }) => {
  // Single book card
  const { isbn13, image, title, subtitle } = singleBook;
  return (
    <div className="card card-compact bg-base-100 hover:shadow-2xl hover:border-2 rounded-md border">
      <figure><img src={image} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{subtitle.substring(0, 50)}...</p>
        <div className="card-actions">
          <Link to={`/book/${isbn13}`} className="btn btn-xs w-full">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
