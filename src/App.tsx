import React from 'react';
import MainPage from './Components/MainPage/MainPage';
import Exercise from './Classes/Execirse';
import CssSelectorExercise from './Classes/CSSExercise';

function App() {

  const excersises = [];

  for (let index = 0; index <= 31; index++) {
    if (index % 2 == 0) {
      excersises.push(new CssSelectorExercise(
        "The Universal Selector",
        true,
        "You can select everything!",
        "*",
        "You can select all elements with the universal selector!",
        ["p* selects any element inside all p elements.", "p* selects any element inside all p elements."]))
    }
    else {
      excersises.push(new CssSelectorExercise(
        "Test",
        false,
        "Test",
        "*",
        "Test",
        ["Test"]))
    }

  }
  return (
    <MainPage excersises={excersises} />
  );
}

export default App;
