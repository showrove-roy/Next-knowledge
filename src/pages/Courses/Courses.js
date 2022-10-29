import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../../shared/Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center gap-10 pt-8  w-fit m-auto md:pl-5'>
      {courses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
