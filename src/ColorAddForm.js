import {React, useState} from "react";

import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";


const ColorAddForm = ( {addColor} ) => {

    const navigate = useNavigate()

    const INITIAL_STATE = {

        color:""

    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((data) => {
            return {
                ...data,
                [name]:value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData.color);
        setFormData(INITIAL_STATE);

        navigate('/colors')

    }

    return (

        <form onSubmit={handleSubmit}>

        <h3>Add Color</h3>

        <label htmlFor="color">Color: </label>
        <input
            type="text"
            placeholder="color"
            name="color"
            id="color"
            value={formData.color}
            onChange={handleChange}
        />

        <button> Add Color! </button>

        </form>

    )




}

export default ColorAddForm;