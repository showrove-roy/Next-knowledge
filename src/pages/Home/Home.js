import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <Player
          autoplay
          loop
          src='https://assets2.lottiefiles.com/packages/lf20_cUG5w8.json'
          className='h-24'
          style={{ marginTop: "10px" }}></Player>
        <h1></h1>
      </div>
      <div className=''>
        <Player
          autoplay
          loop
          src='https://assets5.lottiefiles.com/packages/lf20_puciaact.json'
          className='md:h-[600px]'
          style={{ marginTop: "-40px" }}></Player>
      </div>
    </div>
  );
};

export default Home;
