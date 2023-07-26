import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./Component/HomeScreen/Home";
import Error from "./Component/Error";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from './Component/Cart';
import UserLogin from './Component/UserPenel/UserLogin';
import AdminLogin from './Component/AdminPenel/AdminLogin';
import AdminPenel from './Component/AdminPenel/AdminPenel';
import UserPenel from './Component/UserPenel/UserPenel';
import AddNewCourse from './Component/AdminPenel/AddNewCourse';
import Courses from './Component/AdminPenel/Courses';

import store from './Component/store';
import { Provider } from 'react-redux';
import Payment from './Component/Payment';
import VideoPage from './Component/VideoPage';

const AppLayout = () => {



  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/userlogin",
        element: <UserLogin />,
      },
      {
        path: "/adminlogin",
        element: <AdminLogin />,
      },

      {
        path: "/userlogin/userpage",
        element: <UserPenel />,
      },
      {
        path: "/adminlogin/adminpage",
        element: <AdminPenel />,
      },
      {
        path: "/adminlogin/adminpenel/addnewcourse",
        element: <AddNewCourse />,
      },
      {
        path: "/adminlogin/adminpenel/courses",
        element: <Courses />,
      },
      {
        path: "/addnewcourse",
        element: <AddNewCourse />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/videopage",
        element: <VideoPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider store={store} router={appRouter} />);

