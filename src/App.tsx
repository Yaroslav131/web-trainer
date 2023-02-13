import React from 'react';
import MainPage from './Components/MainPage/MainPage';
import Exercise from './Classes/Execirse';
import CssSelectorExercise from './Classes/CSSExercise';

function App() {

  const excersises = [];

  for (let index = 0; index <= 31; index++) {
    if (index % 2 == 0) {
      excersises.push(new CssSelectorExercise(
        "d65a08a6beac3d9a1d7a5cfa15513fa5.png",
        "Type Selector",
        "Select the plates",
        true,
        "Select elements by their type",
        "A",
        "Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.",
        ["div selects all div elements.", "p selects all p elements."]))
    }
    else {
      excersises.push(new CssSelectorExercise(
        "",
        "Combine the Descendant & ID Selectors",
        "Select the pickle on the fancy plate",
        false,
        "",
        "#id  A",
        "You can combine any selector with the descendent selector.",
        ["#cool span selects all span elements that are inside of elements with id='cool'"]))
    }

  }
  return (
    <MainPage excersises={excersises} />
  );
}

export default App;
