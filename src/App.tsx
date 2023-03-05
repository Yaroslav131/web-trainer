import React from 'react';

import MainPage from './Components/MainPage/MainPage';
import CssExercise from './Classes/CSSExercise';

import NotFound from "./Components/ErrorPage/NotFound"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MenuPage from './Components/MenuPage/MenuPage';

function App() {

  const excersises = [];

  for (let index = 0; index <= 31; index++) {
    if (index % 2 == 0) {
      excersises.push(new CssExercise(
        "Сам узанаешь, не маленький",
        ["1234"],
        "d65a08a6beac3d9a1d7a5cfa15513fa5.png",
        "Тестовое задание",
        "Напиши 1 2 3 4",
        false,
        "Напиши числа",
        "Число",
        "Всегото нужно написать числа",
        ["1 это число", "2 это число"]))
    }
    else {
      excersises.push(new CssExercise(
        "Ладно, тебе нужно нажать на 0 четыре раза",
        ["0000"],
        "",
        "Тестовое задание",
        "Напиши 0000",
        false,
        "Напиши числа",
        "Число",
        "Всегото нужно написать числа",
        ["0 это число"]))
    }

  }

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
      element: <MainPage excersises={excersises} />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
