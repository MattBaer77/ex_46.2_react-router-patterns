import React from "react";

import { useParams } from 'react-router-dom'

const Dog = ( {dogs} ) => {

    const {name} = useParams();

    const [dog] = dogs.filter(d => d.name === name)

    return (

        <div className="Dog">
            <h2>{dog.name}</h2>
            <h3>{dog.age}</h3>
            <img alt={'An image of ' + dog.name} src={dog.src}></img>

            <h3>Facts about {dog.name}</h3>
            <ul>
                {dog.facts.map(f => <li>{f}</li>)}
            </ul>

        </div>

    )

}

export default Dog;