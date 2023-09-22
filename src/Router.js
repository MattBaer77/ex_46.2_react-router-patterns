import {React} from "react";

import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";

import DogList from './DogList';
import Dog from './Dog';
import ColorList from './ColorList.js';
import Color from './Color.js';

const Router = ( {dogs, colors, pathHistory, modifyPathHistory} ) => {

    console.log(pathHistory)

    return(

        <Routes>

          <Route exact path="/dogs" element={<DogList dogs={dogs} modifyPathHistory={modifyPathHistory}/>} />
          <Route path="/dogs/:name" element={<Dog dogs={dogs} modifyPathHistory={modifyPathHistory}/>} />

          <Route exact path ="/colors" element={<ColorList colors={colors} modifyPathHistory={modifyPathHistory}/>} />
          <Route path="/colors/:color" element={ <Color colors={colors} modifyPathHistory={modifyPathHistory}/> } />
    
          <Route path="*" element={<Navigate to={pathHistory} />}/>

        </Routes>

    )




}

export default Router;