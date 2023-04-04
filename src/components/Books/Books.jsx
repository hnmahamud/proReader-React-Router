import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

// Book page
const Books = () => {
  // For Loading animation
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <LoadingSpinner />;
  }

  // Map books list for display all as grid layout
  const allBookList = useLoaderData();
  const { books } = allBookList;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((singleBook) => <Book key={singleBook.isbn13} singleBook={singleBook} />)}
    </div>
  );
};

export default Books;
