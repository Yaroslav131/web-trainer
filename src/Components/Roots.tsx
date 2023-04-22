import React from 'react';

import MainPage from '../Components/MainPage/MainPage';
import NotFound from "../Components/ErrorPage/NotFound"
import {
  createBrowserRouter,
} from "react-router-dom";
import MenuPage from '../Components/MenuPage/MenuPage';
import InProgressPage from './ErrorPage/InProgress';

 const Router = createBrowserRouter([
    {
      path: "*",
      element: <InProgressPage />
    }
    ,
    {
      path: "/",
      element: <MenuPage />
    },
    {
      path: "/exercises/css-selectors",
      element: <MainPage  excersisesTitle={"CSS селекторы"} />
    },
  ]);

export default Router;