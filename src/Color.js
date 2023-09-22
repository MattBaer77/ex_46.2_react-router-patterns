import React from "react";

import './Color.css';

import { useParams, NavLink, useNavigate, Navigate} from 'react-router-dom'

const Color = ( {colors} ) => {

    // const navigate = useNavigate()

    const {color} = useParams();

    const [foundColor] = colors.filter(c => c === color)

    if (!foundColor) {

        // navigate('/colors')
        return <Navigate to={'/colors'} />

        
    }

    return (

        <div className="Color" style={{backgroundColor: foundColor}}>
            <h1>THIS COLOR IS {foundColor}!</h1>
            <NavLink to={'/colors'}>Back to colors.</NavLink>
        </div>

    )

}

export default Color;