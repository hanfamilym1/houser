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
        this.deleteHouse = this.deleteHouse.bind(this)
        this.getHouses = this.getHouses.bind(this)
    }
    componentDidMount(){
        this.getHouses()
    }

    getHouses(){
        axios.get('/api/houses').then(res=>this.setState({
            houses: res.data
        })) 
    }
    deleteHouse(id){
        // console.log(id)
        axios.delete(`/api/house/${id}`).then(res=>this.setState({
            houses: res.data
        }))
        this.getHouses()
     
    }
    render(){
        console.log(this.state.houses)
        let listOfHouses = this.state.houses.map(house=>{
            let {id, name, address, city, state, zipcode} = house
            return (
                <div>
                <House houses={this.state.houses} deleteHouse={this.deleteHouse} id={id} name={name} address={address} city={city} state={state} zipcode={zipcode}/>
                
                </div>
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