import React from "react";

const Course = ({ course }) => {
  const { id, photo_URL, title, subTitle, price, rating, subject } = course;
  return (
    <div className='card card-compact  md:w-11/12 shadow-xl bg-neutral'>
      <figure className=''>
        <img src={photo_URL} alt={subject} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{subTitle}</p>
        <div className='card-actions justify-between'>
          <p>{price}</p>
          <p>{rating}</p>

          <button className='btn bg-[#DF5155] text-[#283132] font-bold  hover:text-[#DF5155]'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
