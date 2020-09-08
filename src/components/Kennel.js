import React from "react"
import {Animal} from "./animals/Animal"
import {Employee} from "./employee/Employee"
import {Customer} from "./customer/Customer"
import {Location} from "./location/Location"
import "./Animals.css"
import "./Employee.css"
import "./Customer.css"
import "./Location.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
        <h2>Location</h2>
        <article className="location">
            <Location />
            <Location />
        </article>
        <h2>Customer</h2>
        <article className="customer">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)