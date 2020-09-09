import React from "react"
import {AnimalList} from "./animals/AnimalsList"
import {AnimalProvider} from "./animals/AnimalsProvider"
import {EmployeeProvider} from "./employee/EmployeeProvider"
import {EmployeeList} from "./employee/EmployeeList"
import {CustomerProvider} from "./customer/CustomerProvider"
import {CustomerList} from "./customer/CustomerList"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
/*import "./animals/Animals.css"
import "./employee/Employees.css"
import "./customer/Customers.css"
import "./location/Location.css"*/

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
        <h2>Employees</h2>
        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>
        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    </>
)