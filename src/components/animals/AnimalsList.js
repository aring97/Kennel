import React, {useContext} from "react"
import {AnimalContext} from "./AnimalsProvider"
import {Animal} from "./Animal"

export const AnimalList=(props)=>{
    const {animals}=useContext(AnimalContext)
    
    return(
        <div className="animals">
            <h1>Animals</h1>
            <button onClick={()=>props.history.push("/animals/create")}
             className="animal__button">
                 Add Animal
             </button>
             <article className="animalList">
             {
                animals.map(animalObj=>{

                    return <Animal  
                    key={animalObj.id}
                    animal={animalObj||{}}
                    />
                })
            }
             </article>
        </div>
    )
}