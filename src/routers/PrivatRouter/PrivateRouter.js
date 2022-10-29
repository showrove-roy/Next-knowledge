import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthInfo } from "../../contexts/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuthInfo();
  const location = useLocation();

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

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRouter;
