import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    render(){
        return(
            <div>
                <h2>Dashboard</h2>
                <Link to='/wizard'><button><h3>Add New Property</h3></button></Link>
                <House/>
            </div>
        )
    }
}

export default Dashboard