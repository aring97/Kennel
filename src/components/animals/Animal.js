import React from "react"
import "./Animals.css"

export const Animal = ({animal}) => (
    <section className="animal">
        <h3 className="animal__name">name: {animal.name}</h3>
<div className="animal__breed">Breed: {animal.breed}</div>
    </section>
)