import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Dashboard.css'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
        this.getHouses = this.getHouses.bind(this)
    }
    componentDidMount() {
        this.getHouses()
    }

    getHouses() {
        axios.get('/api/houses').then(res => this.setState({
            houses: res.data
        }))
    }
    deleteHouse(id) {
        // console.log(id)
        axios.delete(`/api/house/${id}`).then(res => this.setState({
            houses: res.data
        }))
        this.getHouses()

    }
    render() {
        console.log(this.state.houses)
        let listOfHouses = this.state.houses.map(house => {
            let { id, name, address, city, states, zipcode, image, monthly, rent } = house
            return (
                <div>
                    <House houses={this.state.houses} deleteHouse={this.deleteHouse} id={id} name={name} address={address} city={city} states={states} zipcode={zipcode} image={image} monthly={monthly} rent={rent} />

                </div>
            )
        })
        return (
            <div class='dashboard'>
                <div class='inner'>
                    <div class='dbheader1'>
                        <h2 class='dbheader'>Dashboard</h2>
                        <Link to='/wizard/step1'><button class='newproperty'><h3>Add New Property</h3></button></Link>
                    </div>

                    <hr />
                    <div>
                    <h3>Housing Listings</h3>
                    {listOfHouses}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard