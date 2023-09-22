import {React} from "react";

import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";

import DogList from './DogList';
import Dog from './Dog';
import ColorList from './ColorList.js';
import Color from './Color.js';

const Router = ( {dogs, colors } ) => {

    return(

        <Routes>

          <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<Dog dogs={dogs} />} />

          <Route exact path ="/colors" element={<ColorList colors={colors} />} />
          <Route path="/colors/:color" element={ <Color colors={colors} /> } />
    
          <Route path="*" element={<Navigate to='/colors' />}/>

        </Routes>

    )




}

export default Router;