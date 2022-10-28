import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  // get & set course subject
  const [subjects, setSubjects] = useState([]);
  // get course subject
  useEffect(() => {
    fetch("https://next-knowledge-server.vercel.app/subject")
      .then((res) => res.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='fixed'>
      <h3 className='text-2xl font-bold mt-5 mb-0 text-[#f71e7cdf]'>
        Our's Courses
      </h3>
      <div className='divider mt-1 after:bg-[#f7df1e] before:bg-[#f7df1e]'></div>

      <ul className='menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box'>
        {subjects.map((subject) => (
          <li className='font-semibold capitalize'>
            <Link>{subject?.subject}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
