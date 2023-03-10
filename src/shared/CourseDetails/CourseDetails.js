import React from "react";
import { HiStar } from "react-icons/hi2";
import { Link, useLoaderData } from "react-router-dom";
import { jsPDF } from "jspdf";

const CourseDetails = () => {
  const course = useLoaderData();
  const {
    id,
    photo_URL,
    title,
    subTitle,
    price,
    rating,
    subject,
    description,
  } = course;

  const generatePDF = () => {
    const doc = new jsPDF("landscape", "px", "a4", "false");

    doc.setFont("helvetica", "bold");
    doc.text(`${title}`, 100, 30);

    doc.text(`${subTitle}`, 10, 40);

    doc.save(`${title}.pdf`);
  };

  return (
    <div className='card card-compact  md:w-9/12 w-full shadow-xl bg-neutral cursor-pointer mt-10 mx-auto'>
      <figure>
        <img className='w-full' src={photo_URL} alt={subject} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='font-semibold'>{subTitle}</p>
        <div className='card-actions justify-between justify-items-center items-center mt-5'>
          <p className='font-semibold text-base cursor-pointer hover:text-[#DF5155]'>
            $ {price}
          </p>
          <p className='font-semibold text-base cursor-pointer hover:text-[#DF5155] flex items-center'>
            <HiStar className='text-lg mr-1 text-yellow-400' /> {rating}
          </p>

          <button
            onClick={generatePDF}
            className='btn btn-sm btn-outline btn-warning font-semibold text-base'>
            Free
          </button>
          <button className='btn btn-sm btn-outline btn-warning font-semibold text-base'>
            <Link to={`/courses/order/${id}`}>Premium</Link>
          </button>
        </div>
        <div className='divider mb-1'></div>

        <div className=''>
          <div className='collapse bg-slate-800 collapse-arrow'>
            <input type='checkbox' className='peer' />
            <div className='collapse-title md:text-2xl text-lg font-semibold'>
              Description
            </div>
            <div className='collapse-content'>
              <p className='font-semibold'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
