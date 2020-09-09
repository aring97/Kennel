import React, {useContext} from "react"
import {CustomerContext} from "./CustomerProvider"
import {Customer} from "./Customer"
import "./Customers.css"

export const CustomerList=()=>{
    const {customers}=useContext(CustomerContext)

    return (
        <div className="customers">
            {
                customers.map(customerObj=><Customer key={customerObj.id} customer={customerObj} />)
            }
        </div>
    )
}