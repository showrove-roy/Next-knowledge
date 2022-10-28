import React from "react";
import Header from "../Header/Header";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <Header></Header>
      <div className='text-center'>
        <Player
          autoplay
          loop
          src='https://assets9.lottiefiles.com/packages/lf20_0hj4Khn1at.json'
          style={{ height: "300px", width: "300px" }}></Player>

        <h3 className='md:text-3xl font-semibold'>This Page is not Found</h3>
        <h4 className='md:text-2xl my-3 font-semibold'>
          Please Go{" "}
          <Link
            to='/courses'
            className='btn-secondary px-3 rounded font-semibold py-1'>
            Courses
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Error404;
