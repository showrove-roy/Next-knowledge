import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../../shared/Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-10  pt-10 border-success border m-auto'>
      {courses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
