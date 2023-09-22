// import logo from './logo.svg';
import './App.css';

import {React, useState} from "react";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import whiskey from './dogs/whiskey.jpg';
import duke from './dogs/duke.jpg';
import perry from './dogs/perry.jpg';
import tubby from './dogs/tubby.jpg';

// import DogList from './DogList';
// import Dog from './Dog';

// import ColorList from './ColorList.js';

import Router from './Router';

function App( {dogs, colors} ) {

  return (

    <div className='App'>

      <BrowserRouter>

      <Router colors={colors} dogs={dogs} />

      </BrowserRouter>

    </div>
    
  );

}

App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ],
    colors: [
        "red",
        "green",
        "blue"
      ]
  }

export default App;
