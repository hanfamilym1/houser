import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
        this.createHouse = this.createHouse.bind(this)
    }

    handleName(val){
        this.setState({
            name: val
        })
    }
    handleAddress(val){
        this.setState({
            address: val
        })
    }

    handleCity(val){
        this.setState({
            city: val
        })
    }

    handleState(val){
        this.setState({
            state: val
        })
    }

    handleZip(val){
        this.setState({
            zipcode: val
        })
    }

    createHouse(){
        let {name, address, city, state, zipcode } = this.state
        axios.post('/api/house', {name, address, city, state,zipcode}).then (res=>
        res.data)
    }

    render(){
        console.log(this.state.name)
        console.log(this.state.address)
        console.log(this.state.city)
        console.log(this.state.state)
        console.log(this.state.zipcode)
        
        return(
        <div>
            <h2>Add New Listing</h2>
           <Link to='/'> <button><h4>Cancel</h4></button> </Link>
            <p>Property Name</p> <br/>
            <input type="text" value={this.state.name} onChange={(e)=>{this.handleName(e.target.value)}}/>
            <p>Address</p> <br/>
            <input type="text" value={this.state.address} onChange={(e)=>{this.handleAddress(e.target.value)}}/>
            <p>City</p>
            <input type='text' value={this.state.city} onChange={(e)=>{this.handleCity(e.target.value)}}/>
            <p>State</p>
            <input type="text" value={this.state.state} onChange={(e)=>{this.handleState(e.target.value)}}/>
            <p>Zip</p>
            <input type="number" value={this.state.zipcode} onChange={(e)=>{this.handleZip(e.target.value)}}/>
            <br/>
            <br/>
            <Link to='/'><button onClick={this.createHouse}><h4>Complete</h4></button></Link>
        </div>
        )
    }
}

export default Wizard