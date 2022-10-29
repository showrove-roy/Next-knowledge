import { createBrowserRouter } from "react-router-dom";
import CourseLayOut from "../../layout/CourseLayOut";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Error404 from "../../shared/404Error/Error404";
import CourseDetails from "../../shared/CourseDetails/CourseDetails";
import OrderPage from "../../shared/OrderPage/OrderPage";
import Login from "../../shared/sign-IN-UP/Login/Login";
import SignUP from "../../shared/sign-IN-UP/SignUP/SignUP";
import PrivateRouter from "../PrivatRouter/PrivateRouter";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/courses/order/:id",
        loader: ({ params }) =>
          fetch(
            `https://next-knowledge-server.vercel.app/courses/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <OrderPage></OrderPage>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/courses",
    element: <CourseLayOut></CourseLayOut>,
    children: [
      {
        path: "/courses",
        loader: () => fetch("https://next-knowledge-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/course/:id",
        loader: ({ params }) =>
          fetch(
            `https://next-knowledge-server.vercel.app/courses/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <CourseDetails></CourseDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/courses/level/:level",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://next-knowledge-server.vercel.app/level/${params.level}`
          ),
      },
      {
        path: "/courses/subject/:subject",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://next-knowledge-server.vercel.app/subject/${params.subject}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);
