import { BookOpenIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Navbar
const Header = () => {
  return (
    <nav className=" bg-gray-100 text-gray-500 font-bold">
      <div className="navbar w-[80%] mx-auto">
        {/* Logo */}
        <div className="navbar-start">
          <Link to="/" className="inline-flex items-center">
            <BookOpenIcon className="h-6 w-6 text-blue-500" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              ProReader
            </span>
          </Link>
        </div>

        {/* NavLink for small device */}
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-gray-100 rounded-md space-y-4">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Home</NavLink>
              <NavLink to="/books" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Books</NavLink>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>About</NavLink>
            </ul>
          </div>
        </div>

        {/* NavLink for large device */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'mr-8 text-blue-500' : 'mr-8')}>Home</NavLink>
            <NavLink to="/books" className={({ isActive }) => (isActive ? 'mr-8 text-blue-500' : 'mr-8')}>Books</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>About</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
