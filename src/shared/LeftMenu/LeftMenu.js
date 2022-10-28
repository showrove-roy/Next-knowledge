import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  // get and set course level
  const [levels, setLevels] = useState([]);

  // get & set course subject
  const [subjects, setSubjects] = useState([]);

  // get course levels
  useEffect(() => {
    fetch("https://next-knowledge-server.vercel.app/level")
      .then((res) => res.json())
      .then((data) => setLevels(data))
      .catch((error) => console.error(error));
  }, []);

  // get course subject
  useEffect(() => {
    fetch("https://next-knowledge-server.vercel.app/subject")
      .then((res) => res.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='md:fixed w-fit'>
      <div>
        <h3 className='md:text-2xl text-xl md:font-bold font-semibold mt-5 mb-0 text-[#f71e7cdf] md:text-start text-center md:ml-1'>
          All Levels
        </h3>
        <div className='divider my-0  after:bg-[#f7df1e] before:bg-[#f7df1e] md:w-1/2'></div>
        <ul className='menu menu-compact lg:menu-normal bg-base-100 flex-row md:flex-col md:w-56'>
          {levels.map((level, indexID) => (
            <li key={indexID} className='font-semibold capitalize'>
              <Link>{level?.level}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='md:text-2xl text-xl md:font-bold font-semibold mt-5 mb-0 text-[#f71e7cdf] md:text-start text-center md:ml-1'>
          All Subjects
        </h3>
        <div className='divider my-0  after:bg-[#f7df1e] before:bg-[#f7df1e] md:w-3/5'></div>
        <ul className='menu menu-compact lg:menu-normal bg-base-100 flex-row md:flex-col md:w-56'>
          {subjects.map((subject, indexID) => (
            <li key={indexID} className='font-semibold capitalize'>
              <Link>{subject?.subject}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftMenu;
