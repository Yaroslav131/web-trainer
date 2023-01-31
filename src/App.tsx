import React from 'react';
import MainPage from './Components/MainPage/MainPage';
import Exercise from './Classes/Execirse';

function App() {

  const excersises = [];

  for (let index = 0; index <= 32; index++) {
    if (index % 5 == 0) {
      excersises.push(new Exercise(`${index}`, true))
    }
    else {
      excersises.push(new Exercise(`${index}`, false))
    }

  }
  return (
    <MainPage excersises={excersises} />
  );
}

export default App;
