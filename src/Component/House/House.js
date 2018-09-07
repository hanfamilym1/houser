import React from 'react'

export default function House(props){
    console.log(props.name)
    console.log(props.id)
   
    return(
        <div>
            <h5>Property Name: {props.name}</h5>
            <h5>Address: {props.address}</h5>
            <h5>City: {props.city}</h5>
            <h5>State: {props.state}</h5>
            <h5>Zipcode: {props.zipcode}</h5>
            <button onClick={()=>props.deleteHouse(props.id)}>X</button>
        </div>
    )
}