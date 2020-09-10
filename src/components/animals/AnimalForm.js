import React, {useContext, useRef} from "react"
import {AnimalContext} from "./AnimalsProvider"
import {LocationContext} from "../location/LocationProvider"
import "./Animals.css"

export const AnimalForm=(props)=>{
    const {addAnimal}=useContext(AnimalContext)
    const {locations}=useContext(LocationContext)
    const animalName=useRef("")
    const clinic=useRef(0)
    const animalBreed=useRef("")

    const constructNewAnimal=()=>{
        const locationId=parseInt(clinic.current.value)
        if(locationId===0){
            window.alert("Please select a location")
        }else{
            addAnimal({
                name: animalName.current.value,
                locationId:locationId,
                customerId: parseInt(localStorage.getItem("kennel_customer")),
                breed:animalBreed.current.value
            })
        }
    }
    return(
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <div className="form-group">
                <label htmlFor="animalName">Animal Name</label>
                <input
                type="text"
                id="animalName"
                ref={animalName}
                required
                autoFocus
                className="form-control"
                placeholder="Animal Name"/>
            </div>
            <div className="animalForm__breed">
            <label htmlFor="animalBreed">Animal Breed</label>
            <input 
            type="text"
            id="animalBreed"
            ref={animalBreed}
            required
            autoFocus
            className="form-control"
            placeholder="Animal Breed" />
            </div>
            <div className="form-group">
                <label htmlFor="location">Assign to location</label>
                <select
                defaultValue=""
                name="location"
                ref={clinic}
                id="animalLocation"
                className="form-control">
                    <option value="0"> select a location</option>
                    {locations.map(locationObj=>(
                        <option key={locationObj.id} value={locationObj.id}>
                            {locationObj.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit"
            onClick={
                event=>{
                    event.preventDefault()
                    constructNewAnimal()
                    props.history.push("/animals")
                }
            }
            className="btn btn-primary">Save animal</button>
        </form>
    )

}