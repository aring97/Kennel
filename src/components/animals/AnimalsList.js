import React, {useContext} from "react"
import {AnimalContext} from "./AnimalsProvider"
import {Animal} from "./Animal"
import {LocationContext} from "../location/LocationProvider"
import {CustomerContext} from "../customer/CustomerProvider"

export const AnimalList=()=>{
    const {animals}=useContext(AnimalContext)
    const {locations}=useContext(LocationContext)
    const {customers}=useContext(CustomerContext)

    return(
        <div className="animals">
            {
                animals.map(animalObj=>{
                    const ownerObj=customers.find(c=>c.id===animalObj.customerId)
                    const clinicObj=locations.find(l=>l.id===animalObj.locationId)

                    return <Animal  
                    key={animalObj.id}
                    animal={animalObj||{}}
                    customer={ownerObj||{}} 
                    location={clinicObj||{}}/>
                })
            }
        </div>
    )
}