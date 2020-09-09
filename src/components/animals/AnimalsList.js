import React, {useContext} from "react"
import {AnimalContext} from "./AnimalsProvider"
import {Animal} from "./Animal"

export const AnimalList=()=>{
    const {animals}=useContext(AnimalContext)

    return(
        <div className="animals">
            {
                animals.map(animalObj=><Animal key={animalObj.id} animal={animalObj} />)
            }
        </div>
    )
}