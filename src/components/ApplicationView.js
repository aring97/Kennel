import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animals/AnimalsProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animals/AnimalsList"
import {CustomerProvider} from "./customer/CustomerProvider"
import {CustomerList} from "./customer/CustomerList"
import {EmployeeProvider} from "./employee/EmployeeProvider"
import {EmployeeList} from "./employee/EmployeeList"
import {EmployeeForm} from "./employee/EmployeeForm"
import { AnimalForm } from "./animals/AnimalForm"
import { AnimalDetail } from "./animals/AnimalDetail"
import { LocationDetail } from "./location/LocationDetail"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <EmployeeProvider>
                    <AnimalProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
                <Route exact path="/location/:locationId(\d+)" render={
                    props=><LocationDetail {...props}/>
                } />
                </AnimalProvider>
                </EmployeeProvider>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" render={
                    props=><AnimalList {...props}/>
                } />
                <Route exact path="/animals/create" render={
                   props=><AnimalForm {...props} /> 
                } />
                <Route path="/animals/:animalId(\d+)" render={
                    props=><AnimalDetail {...props} />
                } />
                </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                <Route exact path="/employees" render={
                    props=><EmployeeList {...props} />
                } />
                <Route exact path="/employees/create" render={
                    props=><EmployeeForm {...props}/>
                } />
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}