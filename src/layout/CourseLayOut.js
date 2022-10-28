import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import LeftMenu from "../shared/LeftMenu/LeftMenu";

const CourseLayOut = () => {
  return (
    <>
      <Header></Header>
      <div className='md:flex md:justify-center md:px-10 px-5'>
        <div className='md:w-1/5 w-fit mx-auto'>
          <LeftMenu></LeftMenu>
        </div>
        <div className='md:w-4/5 w-full mx-auto'>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CourseLayOut;
