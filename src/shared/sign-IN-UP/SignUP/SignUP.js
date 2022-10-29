import React from "react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useAuthInfo } from "../../../contexts/AuthProvider";

const SignUP = () => {
  const { googleSignIN, createUser, updateUserInfo, gitHubLogin } =
    useAuthInfo();

  // Google sign handel
  const googleSignHandle = () => {
    setErrorMess(null);
    googleSignIN()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setErrorMess(errorMessage);
      });
  };

  // Create user handel
  const createUserHandle = (event) => {
    setErrorMess(null);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoUrl);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userInfoUpdate(name, photoUrl);
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setErrorMess(errorMessage);
      });

    form.reset();
  };

  // update User Info Handle
  const userInfoUpdate = (name, photoLink) => {
    const profile = {
      displayName: name,
      photoURL: photoLink,
    };
    updateUserInfo(profile)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
        const errorMessage = error.message;
        setErrorMess(errorMessage);
      });
  };

  const gitHubLoginHandle = () => {
    setErrorMess(null);
    gitHubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setErrorMess(errorMessage);
      });
  };

  // Error Message control
  const [errorMess, setErrorMess] = useState(null);
  return (
    <div className='hero h-full  pt-2 pb-10'>
      <div className=''>
        {errorMess ? (
          <p className='my-5 text-error text-center'>{errorMess}</p>
        ) : (
          <h3 className='text-5xl font-bold my-5'>Sign Up now!</h3>
        )}

        <div className='card  w-full max-w-sm shadow-2xl bg-base-200'>
          <form
            onSubmit={createUserHandle}
            className='card-body mt-0 px-4 py-0'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='name'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo URL</span>
              </label>
              <input
                type='text'
                name='photoUrl'
                placeholder='photo url'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control mt-3'>
              <button type='submit' className='btn btn-primary'>
                Sign Up
              </button>
            </div>
            <label className='label'>
              <Link to='/login' className='label-text-alt link link-hover'>
                If you already have an account, just login.
              </Link>
            </label>
            <h5 className='font-bold text-center'>Or</h5>
          </form>
          <div className='flex justify-evenly mb-3'>
            <FcGoogle
              onClick={googleSignHandle}
              className='text-5xl cursor-pointer hover:border-2 p-1 rounded'
            />
            <FaGithub
              onClick={gitHubLoginHandle}
              className='text-5xl cursor-pointer hover:border-2 p-1 rounded'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
