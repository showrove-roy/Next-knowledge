import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftMenu from "../shared/LeftMenu/LeftMenu";

const CourseLayOut = () => {
  return (
    <>
      <Header></Header>
      <div className='md:flex md:justify-center md:px-10 px-5'>
        <div className='w-1/5'>
          <LeftMenu></LeftMenu>
        </div>
        <div className='w-4/5'>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default CourseLayOut;
