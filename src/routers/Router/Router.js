import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Error404 from "../../shared/404Error/Error404";
import Login from "../../shared/sign-IN-UP/Login/Login";
import SignUP from "../../shared/sign-IN-UP/SignUP/SignUP";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);
