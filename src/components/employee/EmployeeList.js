import React, {useContext} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from "./Employee"
import {LocationContext} from "../location/LocationProvider"
import "./Employees.css"

export const EmployeeList=(props)=>{
    const {employees}=useContext(EmployeeContext)
    const {locations}=useContext(LocationContext)

    return(
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={()=>props.history.push("/employees/create")}
            className="employee__button">
                Add Employee
            </button>
            <article className="employeeList">
            {
                employees.map(employeeObj=>{
                    const locationObj=locations.find(l=>l.id===employeeObj.locationId)
                return<Employee key={employeeObj.id} employee={employeeObj||{}} location={locationObj || {}} props={props}/>})
            }
            </article>
        </div>
    )
}