import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useAuthInfo } from "../../../contexts/AuthProvider";

const Login = () => {
  const { googleSignIN, gitHubLogin, loginUser } = useAuthInfo();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Google sign handel
  const googleSignHandle = () => {
    googleSignIN()
      .then((result) => {
        setErrorMess("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setErrorMess(errorMessage);
      });
  };

  // Git hum handel
  const gitHubLoginHandle = () => {
    gitHubLogin()
      .then((result) => {
        setErrorMess("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setErrorMess(errorMessage);
      });
  };

  // login user handel
  const loginUserHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        form.reset();
        setErrorMess("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        const errorMessage = error.message;
        setErrorMess(errorMessage);
      });
  };

  // Error Message control
  const [errorMess, setErrorMess] = useState("");
  return (
    <div className='hero h-full  pt-2 pb-10'>
      <div className=''>
        {errorMess ? (
          <p className='my-5 text-error text-center'>{errorMess}</p>
        ) : (
          <h3 className='text-5xl font-bold my-5'>Login now!</h3>
        )}
        <div className='card  w-full max-w-sm shadow-2xl bg-base-200'>
          <form onSubmit={loginUserHandle} className='card-body mt-0 px-4 py-0'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                name='email'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                className='input input-bordered'
                name='password'
                required
              />
              <label className='label'>
                <Link className='label-text-alt link link-hover'>
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className='form-control mt-3'>
              <button className='btn btn-primary' type='submit'>
                Login
              </button>
            </div>
            <label className='label'>
              <Link to='/signup' className='label-text-alt link link-hover'>
                If you don't have one yet, sign up.
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

export default Login;
