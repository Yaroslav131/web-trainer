import React from 'react';
import CssSelectors from "../json-exercises/css-selectors.json";
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
      path: "/exercises/css-selectors",
      element: <MainPage excersises={CssSelectors} excersisesTitle={"CSS селекторы"} />
    },
  ]);

export default Router;