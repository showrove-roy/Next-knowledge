import React from "react";
import { HiStar } from "react-icons/hi2";
const Course = ({ course }) => {
  const { id, photo_URL, title, subTitle, price, rating, subject } = course;
  return (
    <div className='card card-compact  md:w-11/12 shadow-xl bg-neutral'>
      <figure>
        <img src={photo_URL} alt={subject} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{subTitle}</p>
        <div className='card-actions justify-between justify-items-center items-center mt-5'>
          <p className='font-semibold text-base cursor-pointer hover:text-[#DF5155]'>
            $ {price}
          </p>
          <p className='font-semibold text-base cursor-pointer hover:text-[#DF5155] flex items-center'>
            <HiStar className='text-lg mr-1 text-yellow-400' /> {rating}
          </p>

          <button className='btn btn-sm btn-outline btn-warning font-semibold text-base'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
