import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { updateImage} from '../../../ducks/reducer'

class StepTwo extends Component {
    render(){
        const {updateImage} = this.props
        console.log(this.props.image)
        return(
            <div>
                <p>Image URL</p>
                <input type="text" value={this.props.image} onChange={(e)=>{updateImage(e.target.value)}}/>
                

                <br/>

                <Link to='/wizard/step1'><button><h4>Previous Step</h4></button></Link>
                <Link to='/wizard/step3'><button><h4>Next Step</h4></button></Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    let {image} = state
    return{
        image
    }
}

export default connect(mapStateToProps, {updateImage})(StepTwo)