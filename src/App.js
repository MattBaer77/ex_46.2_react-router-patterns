// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import whiskey from './dogs/whiskey.jpg';
import duke from './dogs/duke.jpg';
import perry from './dogs/perry.jpg';
import tubby from './dogs/tubby.jpg';

import DogList from './DogList';
import Dog from './Dog';

import ColorList from './ColorList.js';

function App( {dogs} ) {

  return (

    <div className='App'>

    <BrowserRouter>

    <Routes>
      <Route exact path ="/colors" element={<ColorList />} />
      <Route exact path="/dogs" element={<DogList dogs={dogs}/>} />
      <Route path="/dogs/:name" element={<Dog dogs={dogs}/>}>
      </Route>
      <Route path="*" element={<Navigate to="/dogs" />}/>
    </Routes>

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
  ]
}

export default App;
