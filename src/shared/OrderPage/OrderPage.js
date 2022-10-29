import React from "react";
import { HiStar } from "react-icons/hi2";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const OrderPage = () => {
  const course = useLoaderData();
  const { photo_URL, title, subTitle, price, rating, description } = course;

  const notify = () => toast.success("Successfully Get! Check Your Email");
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    notify();
    form.reset();
  };

  return (
    <div className='py-10'>
      <Toaster position='top-center' reverseOrder={false} />

      <div className='card lg:card-side bg-base-200 shadow-xl md:w-3/5 w-10/12 mx-auto'>
        <figure className='lg:w-1/2'>
          <img className='h-full w-full' src={photo_URL} alt={title} />
        </figure>
        <div className='card-body lg:w-1/2'>
          <h2 className='card-title'>{title}</h2>
          <p>{subTitle}</p>
          <div className='flex'>
            <p className='font-semibold text-base cursor-pointer hover:text-[#DF5155]'>
              $ {price}
            </p>
            <p className='font-semibold text-base cursor-pointer hover:text-[#DF5155] flex items-center justify-end'>
              <HiStar className='text-lg mr-1 text-yellow-400' /> {rating}
            </p>
          </div>
        </div>
      </div>
      <div className='md:w-2/3 w-10/12 mx-auto mt-5 mb-10 '>
        <div className='collapse bg-slate-800 collapse-arrow rounded'>
          <input type='checkbox' className='peer' />
          <div className='collapse-title md:text-2xl text-lg font-semibold'>
            Description
          </div>
          <div className='collapse-content'>
            <p className='font-semibold'>{description}</p>
          </div>
        </div>
      </div>

      {/*  */}
      <h3 className='text-3xl font-bold text-center'>
        Please Fill Up This Form!
      </h3>
      {/*  */}

      <div className='mt-5 mx-5'>
        <div className='card  md:w-4/5 shadow-2xl bg-base-200 mx-auto'>
          <form onSubmit={handelSubmit} className='card-body'>
            <div className='sm:flex  justify-between'>
              <div className='form-control sm:w-1/2 sm:mx-2'>
                <label className='label'>
                  <span className='label-text'>First Name</span>
                </label>
                <input
                  type='text'
                  placeholder='First Name'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control sm:w-1/2 sm:mx-2'>
                <label className='label'>
                  <span className='label-text'>Last Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Last Name'
                  className='input input-bordered'
                />
              </div>
            </div>
            <div className='sm:flex  justify-between'>
              <div className='form-control sm:w-1/2 sm:mx-2'>
                <label className='label'>
                  <span className='label-text'>Contact Number</span>
                </label>
                <input
                  type='text'
                  placeholder='Contact Number'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control sm:w-1/2 sm:mx-2'>
                <label className='label'>
                  <span className='label-text'>E-mail</span>
                </label>
                <input
                  type='text'
                  placeholder='E-mail'
                  className='input input-bordered'
                  required
                />
              </div>
            </div>
            <div className='form-control sm:mx-2'>
              <label className='label'>
                <span className='label-text'>Additional question</span>
              </label>
              <textarea
                className='textarea textarea-bordered'
                placeholder='If you have any additional question about this Course, please write here...'></textarea>
            </div>

            <div className='form-control mt-6 sm:w-40 mx-auto'>
              <button type='submit' className='btn btn-primary'>
                Get Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
