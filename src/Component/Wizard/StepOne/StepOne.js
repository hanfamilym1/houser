import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateName, updateAddress, updateCity, updateStates, updateZip } from '../../../ducks/reducer'

class StepOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
       
    }


    handleName(val) {
        this.setState({
            name: val
        })
    }
    handleAddress(val) {
        this.setState({
            address: val
        })
    }

    handleCity(val) {
        this.setState({
            city: val
        })
    }

    handleState(val) {
        this.setState({
            state: val
        })
    }

    handleZip(val) {
        this.setState({
            zipcode: val
        })
    }

    render(props) {
        const { updateName, updateAddress, updateCity, updateStates, updateZip } = this.props
        console.log(this.props.name)
        console.log(this.props.address)
        console.log(this.props.city)
        console.log(this.props.states)
        console.log(this.props.zipcode)
        return (
            <div>
                <p>Property Name</p> <br />
                <input type="text" value={this.props.name} onChange={(e) => { updateName(e.target.value) }} />
                <p>Address</p> <br />
                <input type="text" value={this.props.address} onChange={(e) => { updateAddress(e.target.value) }} />
                <p>City</p>
                <input type='text' value={this.props.city} onChange={(e) => { updateCity(e.target.value) }} />
                <p>State</p>
                <input type="text" value={this.props.states} onChange={(e) => { updateStates(e.target.value) }} />
                <p>Zip</p>
                <input type="number" value={this.props.zipcode} onChange={(e) => { updateZip(e.target.value) }} />
                <br />
                <br />
                <Link to='/wizard/step2'><button><h4>Next Step</h4></button></Link>
            </div>

        )
    }
}

function mapStateToProps(state) {
    let { name, address, city, states, zipcode } = state
    return {
        name,
        address,
        city,
        states,
        zipcode
    }
}

export default connect(mapStateToProps, { updateAddress, updateCity, updateName, updateStates, updateZip })(StepOne)