import React, {useContext} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import "./Employees.css"

export const Employee=({employee, location, props})=>{
    const {removeEmployee}=useContext(EmployeeContext)

    return(
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {location.name}</div>
        <button type="submit"className="employee__delete" onClick={event=>{
            event.preventDefault()
            removeEmployee(employee.id)
            .then(props.history.push("/employees"))
        }}>Remove employee</button>
    </section>)
    }