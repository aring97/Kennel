import React,{useState, useEffect} from "react"

export const EmployeeContext=React.createContext()

export const EmployeeProvider=(props)=>{
    const [employees, setEmployees]=useState([])

    const getEmployees=()=>{
        return fetch("http://localhost:8088/employees")
        .then(res=>res.json())
        .then(setEmployees)
    }

    const addEmployees=employee=>{
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        .then(getEmployees)
    }

    const removeEmployee=empId=>{
        return fetch(`http://localhost:8088/employees/${empId}`, {
            method: "DELETE"
        })
        .then(getEmployees)
    }

    useEffect(()=>{
        getEmployees()
    }, [])

    return (
        <EmployeeContext.Provider value={{
            employees, addEmployees, removeEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}