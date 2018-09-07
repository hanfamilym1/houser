import React from 'react'
import './House.css'

export default function House(props){
    console.log(props.name)
    console.log(props.id)
    console.log(props.monthly)
    
   
    return(
        <div class='house'>
            <link rel="stylesheet" href={`${props.image}`}/>
            <h5>Property Name: {props.name}</h5>
            <h5>Address: {props.address}</h5>
            <h5>City: {props.city}</h5>
            <h5>State: {props.states}</h5>
            <h5>Zipcode: {props.zipcode}</h5>
            {/* <h5>Image: {props.image}</h5> */}
            <h5>Monthly Mortgage Amount: {props.monthly}</h5>
            <h5>Desired Rent: {props.rent}</h5>
            <button onClick={()=>props.deleteHouse(props.id)}>X</button>
        </div>
    )
}