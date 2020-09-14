import React, {useContext} from "react"
import {LocationContext} from "./LocationProvider"
import {AnimalContext} from "../animals/AnimalsProvider"
import {EmployeeContext} from "../employee/EmployeeProvider"
import "./Location.css"

export const LocationDetail=(props)=>{
    const{locations}=useContext(LocationContext)
    const{animals}=useContext(AnimalContext)
    const{employees}=useContext(EmployeeContext)

    const chosenLocationId=parseInt(props.match.params.locationId, 10)

    const location=locations.find(locationObj=>locationObj.id===chosenLocationId)||{}
    const animalArray=animals.filter(animalObj=>animalObj.locationId===chosenLocationId)
    const employeeArray=employees.filter(employeeObj=>employeeObj.locationId===chosenLocationId)

    return(
        <section className="location">
            <h1 className="location__name">{location.name}</h1>
            <div className="location__animals">Currently holding: {
            animalArray.map(animalObj=>animalObj.name).join(", ")
            }</div>
            <div className="location__employees">Current employees: {
                employeeArray.map(employeeObj=>employeeObj.name).join(", ")
            }
            </div>
        </section>
    )
}