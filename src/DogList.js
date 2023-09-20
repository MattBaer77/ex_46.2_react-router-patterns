import React from "react";

import { NavLink } from "react-router-dom";

const DogList = ( {dogs} ) => {

    return (

        <div>

        <h1>Dogs List</h1>

        {dogs.map(d => <div><NavLink key={d.name} to={"/dogs/"+d.name}>{d.name}</NavLink></div>)}

        <div>
            <NavLink to={'/colors'}>Colors!</NavLink>
        </div>
        
        </div>

    )


}

export default DogList;