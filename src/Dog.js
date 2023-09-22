import React from "react";

import { useParams, NavLink, Navigate } from 'react-router-dom'

const Dog = ( {dogs} ) => {

    const {name} = useParams();

    const [dog] = dogs.filter(d => d.name === name)

    if (!dog){

        return <Navigate to="/dogs"/>

    }

    return (

        <div className="Dog">
            <h2>{dog.name}</h2>
            <h3>{dog.age}</h3>
            <img alt={'An image of ' + dog.name} src={dog.src}></img>

            <h3>Facts about {dog.name}</h3>
            <ul>
                {dog.facts.map(f => <li>{f}</li>)}
            </ul>

            <NavLink to={'/dogs'}>Back to dogs.</NavLink>

        </div>

    )

}

export default Dog;