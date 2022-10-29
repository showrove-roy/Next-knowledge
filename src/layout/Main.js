import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthInfo } from "../contexts/AuthProvider";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Main = () => {
  const { loading } = useAuthInfo();
  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-2/3 mx-auto min-h-fit'>
          <Player
            autoplay
            loop
            src='https://assets6.lottiefiles.com/packages/lf20_raiw2hpe.json'
            className='w-1/4 h-auto'></Player>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
