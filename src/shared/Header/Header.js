import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthInfo } from "../../contexts/AuthProvider";
import logoImg from "../../logoPNG1.png";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState(true);
  const themeHandle = () => {
    setTheme(!theme);
  };

  const { user } = useAuthInfo();
  console.log(user);
  return (
    <div className='sticky top-0 z-50'>
      <div className='navbar bg-neutral'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li className='font-semibold'>
                <Link to='/'>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to='/courses' className='justify-between font-semibold'>
                  Courses
                  <svg
                    className='fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                  </svg>
                </Link>
                <ul className='p-2 bg-black'>
                  <li className=''>
                    <Link to='/courses/level/beginner'>Beginner</Link>
                  </li>
                  <li className=''>
                    <Link to='/courses/level/mid'>Mid</Link>
                  </li>
                  <li className=''>
                    <Link to='/courses/level/advanced'>Advanced</Link>
                  </li>
                </ul>
              </li>
              <li className='font-semibold'>
                <Link to='/faq'>FAQ</Link>
              </li>
              <li className='font-semibold'>
                <Link to='/blog'>Blog</Link>
              </li>
            </ul>
          </div>
          <Link to='/' className='btn btn-ghost normal-case'>
            <img className='h-10' src={logoImg} alt='' />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li className='font-semibold'>
              <Link to='/'>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to='/courses' className='font-semibold'>
                Courses
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </Link>
              <ul className='p-2 bg-black'>
                <li className=''>
                  <Link to='/courses/level/beginner'>Beginner</Link>
                </li>
                <li className=''>
                  <Link to='/courses/level/mid'>Mid</Link>
                </li>
                <li className=''>
                  <Link to='/courses/level/advanced'>Advanced</Link>
                </li>
              </ul>
            </li>
            <li className='font-semibold'>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li className='font-semibold'>
              <Link to='/blogs'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          {user?.uid ? (
            <div className='avatar md:w-11  mx-5 w-8 '>
              {user?.photoURL ? (
                <div className='rounded-full'>
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    title={user?.displayName}
                  />
                </div>
              ) : (
                <FaUserAlt />
              )}
            </div>
          ) : (
            <Link to='/login' className='btn btn-sm btn-outline btn-error'>
              Log IN
            </Link>
          )}

          <button onClick={themeHandle}>
            {theme ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
