import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className=''>
        <Player
          autoplay
          loop
          src='https://assets5.lottiefiles.com/packages/lf20_puciaact.json'
          className='md:h-[600px]'
          style={{ marginTop: "-20px" }}></Player>
      </div>
    </div>
  );
};

export default Home;
