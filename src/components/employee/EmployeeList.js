import React, {useContext} from "react"
import {EmployeeContext} from "./EmployeeProvider"
import {Employee} from "./Employee"
import "./Employees.css"

export const EmployeeList=()=>{
    const {employees}=useContext(EmployeeContext)

    return(
        <div className="employees">
            {
                employees.map(employeeObj=><Employee key={employeeObj.id} employee={employeeObj} />)
            }
        </div>
    )
}