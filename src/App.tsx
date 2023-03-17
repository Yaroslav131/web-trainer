import React from 'react';
import Data from "./json-exercises/css-exersises.json";
import MainPage from './Components/MainPage/MainPage';
import NotFound from "./Components/ErrorPage/NotFound"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MenuPage from './Components/MenuPage/MenuPage';

function App() {

  const router = createBrowserRouter([
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

  return (

    <RouterProvider router={router} />
  );
}

export default App;
