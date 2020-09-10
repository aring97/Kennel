import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"
import {EmployeeContext} from "../employee/EmployeeProvider"
import {AnimalContext} from "../animals/AnimalsProvider"
import "./Location.css"

export const LocationList = () => {
    const { locations } = useContext(LocationContext)
    const {animals}=useContext(AnimalContext)
    const {employees}=useContext(EmployeeContext)

    return (
        <div className="locations">
        {
            locations.map(loc =>{
            const correctAnimalArray=animals.filter(animalObj=>animalObj.locationId===loc.id)
            const correctEmployeeArray=employees.filter(employeeObj=>employeeObj.locationId===loc.id)
            return(
                <Location key={loc.id} 
                location={loc} 
                animalNumber={correctAnimalArray.length} 
                employeeNumber={correctEmployeeArray.length}/>
            )
        }
            )
        }
        </div>
    )
}