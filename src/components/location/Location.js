import React from "react"
import "./Location.css"
import {Link} from "react-router-dom"

export const Location=({location, animalNumber, employeeNumber})=>(
    <section className="location">
        <h3 className="location__name">
            <Link to={`/location/${location.id}`}>
            {location.name}
            </Link>
            </h3>
        <div className="location__address">Address: {location.address}</div>
<div className="location__animalNumber">Number of animals: {animalNumber}</div>
<div className="location__employeeNumber">Number of employees: {employeeNumber}</div>
    </section>
)