import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftMenu from "../shared/LeftMenu/LeftMenu";

const Course = () => {
  return (
    <div>
      <Header></Header>
      <div className='w-2/5'>
        <LeftMenu></LeftMenu>
      </div>
      <div className='w-3/5'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Course;
