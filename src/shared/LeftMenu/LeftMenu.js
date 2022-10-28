import React, { useState } from "react";
import { useEffect } from "react";

const LeftMenu = () => {
  // get & set course subject
  const [subject, setSubject] = useState(null);

  // get course subject
  useEffect(() => {
    fetch("https://next-knowledge-server.vercel.app/subject")
      .then((res) => res.json())
      .then((data) => setSubject(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='fixed'>
      <h3 className='text-2xl font-bold mt-5 mb-0 text-[#f71e7cdf]'>
        Our's Courses
      </h3>
      <div className='divider mt-1 after:bg-[#f7df1e] before:bg-[#f7df1e]'></div>
      <div></div>
    </div>
  );
};

export default LeftMenu;
