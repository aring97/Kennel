import React, { useContext } from "react"
import { AnimalContext } from "./AnimalsProvider"
import "./Animals.css"

export const AnimalSearch = (props) => {
    const { setTerms } = useContext(AnimalContext)

    return (
        <>
            Animal search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setTerms(keyEvent.target.value)
                }
                placeholder="Search for an animal... " />
        </>
    )
}