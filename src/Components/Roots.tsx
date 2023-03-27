import React from 'react';
import Data from "../json-exercises/css-exersises.json";
import MainPage from '../Components/MainPage/MainPage';
import NotFound from "../Components/ErrorPage/NotFound"
import {
  createBrowserRouter,
} from "react-router-dom";
import MenuPage from '../Components/MenuPage/MenuPage';

 const Router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />
    }
    ,
    {
      path: "/",
      element: <MenuPage />
    },
    {
      path: "/exercises/css-exersises",
      element: <MainPage excersises={Data} />
    },
  ]);

export default Router;