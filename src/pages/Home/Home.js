import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className=''>
        <Player
          autoplay
          loop
          src='https://assets5.lottiefiles.com/packages/lf20_puciaact.json'
          style={{ height: "650px", marginTop: "-50px" }}></Player>
      </div>
    </div>
  );
};

export default Home;
