import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            houses: []
        }
    }
    componentDidMount(){
        axios.get('/api/houses').then(res=>this.setState({
            houses: res.data
        }))
    }
    render(){
        console.log(this.state.houses)
        let listOfHouses = this.state.houses.map(house=>{
            let {name, address, city, state, zipcode} = house
            return (
                <House name={name} address={address} city={city} state={state} zipcode={zipcode}/>
            )
        })
        return(
            <div>
                <h2>Dashboard</h2>
                <Link to='/wizard'><button><h3>Add New Property</h3></button></Link>
                {listOfHouses}
            </div>
        )
    }
}

export default Dashboard