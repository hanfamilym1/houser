import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import StepOne from './StepOne/StepOne'
import StepTwo from './StepTwo/StepTwo'
import StepThree from './StepThree/StepThree'
import { connect } from 'react-redux'
import { resetState } from '../../ducks/reducer'

class Wizard extends Component {

    render() {
        const { resetState } = this.props
        // console.log(this.state.name)
        // console.log(this.state.address)
        // console.log(this.state.city)
        // console.log(this.state.state)
        // console.log(this.state.zipcode)

        return (
            <div>
                <h2>Add New Listing</h2>
                <br />
                <Link to='/'> <button onClick={()=>resetState()}><h4>Cancel</h4></button> </Link>
                <Switch>
                    <Route exact path={this.props.match.path+'/step1'} component={StepOne} />
                    <Route exact path='/wizard/step2' component={StepTwo} />
                    <Route exact path='/wizard/step3' component={StepThree} />
                </Switch>
            </div>
        )
    }
}

export default connect(null ,{resetState})(Wizard)