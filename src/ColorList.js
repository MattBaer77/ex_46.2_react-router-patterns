import React from "react";

import { NavLink } from "react-router-dom";


const ColorList = ( {colors} ) => {

    return (
        <div>
            <h1>Welcome to the color factory.</h1>

            <div>
            <NavLink to={'/dogs'}>Back to dogs.</NavLink>
            {colors.map(c => <div><NavLink key={c} to={"/colors/" + c}>{c}</NavLink></div>)}
            </div>

            <div>
            <NavLink to={'/colors/new'}>Add A Color!</NavLink>
            </div>

        </div>
    )
}

export default ColorList;