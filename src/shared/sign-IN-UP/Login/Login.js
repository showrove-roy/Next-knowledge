import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className=''>
        <h1 className='text-5xl font-bold my-3'>Login now!</h1>
        <div className='card  w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body mt-0 px-4 py-0'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                className='input input-bordered'
              />
              <label className='label'>
                <Link href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className='form-control mt-3'>
              <button className='btn btn-primary'>Login</button>
            </div>
            <label className='label'>
              <Link to='/signup' className='label-text-alt link link-hover'>
                If you don't have one yet, sign up.
              </Link>
            </label>
            <h5 className='font-bold'>Or</h5>
          </div>
          <div className='flex justify-evenly mb-3'>
            <FcGoogle className='text-5xl cursor-pointer hover:border-2 p-1 rounded' />
            <FaGithub className='text-5xl cursor-pointer hover:border-2 p-1 rounded' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
