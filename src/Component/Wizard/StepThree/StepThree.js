import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateName, updateStates, updateAddress, updateCity, updateZip, updateImage
    // , updateMonthly, updateRent
} from '../../../ducks/reducer'

class StepThree extends Component {
    constructor(props){
        super(props)
        this.state = {
            monthly: 0, 
            rent: 0
        }
        this.createHouse = this.createHouse.bind(this)
    }

    handleMonthly(val){
        this.setState({
            monthly: val
        })
    }

    handleRent(val){
        this.setState({
            rent: val
        })
    }

    // Changing all of monthly and rent to local state

    createHouse(){
        let {name, address, city, states, zipcode, image, 
            // monthly, rent 
        } = this.props
        let {monthly, rent}= this.state
        axios.post('/api/house', {name, address, city, states,zipcode, image, monthly, rent}).then (res=>
        res.data)
    }

    render() {
        // const {updateMonthly, updateRent} = this.props
       console.log('state', this.state.monthly)
        return (
            <div>
                <p>Monthly Mortgage Amount</p><br/>
                {/* <input type="number" value={this.props.montly} onChange={(e)=>updateMonthly(e.target.value)}/> <br/> */}
                <input type="number" value={this.state.montly} onChange={(e)=>this.handleMonthly(e.target.value)}/> <br/>
                <p>Desired Monthly Rent</p><br/>
                {/* <input type="number" value={this.props.rent} onChange={(e)=>updateRent(e.target.value)}/> <br/> */}
                <input type="number" value={this.state.rent} onChange={(e)=>this.handleRent(e.target.value)}/> <br/>
                <Link to='/wizard/step2'><button><h4>Previous Step</h4></button></Link>
                <Link to='/'><button onClick={this.createHouse}><h4>Complete</h4></button></Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    let {name, states, address, city, zipcode, image, monthly, rent} = state
    return {
        name,
        states,
        address,
        city,
        zipcode,
        image,
        monthly,
        rent
    }
}
export default connect (mapStateToProps, {updateName, updateStates, updateAddress, updateCity, updateZip, updateImage
    // , updateMonthly, updateRent
})(StepThree)
