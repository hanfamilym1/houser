const initialState = {
    name: '',
    address: '',
    city: '',
    states: '',
    zipcode: 0,
    image: '',
    // monthly: 0,
    // rent: 0
}

const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATES = 'UPDATE_STATES'
const UPDATE_ZIP = 'UPDATE_ZIP'
const UPDATE_IMAGE = 'UPDATE_IMAGE'
const RESET_STATE = 'RESET_STATE'
// const UPDATE_MONTHLY = 'UPDATE_MONTHLY'
// const UPDATE_RENT = 'UPDATE_RENT'

function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_NAME: {
            return Object.assign({},state,{name: action.payload})
        }
        case UPDATE_ADDRESS: {
            return Object.assign({},state,{address: action.payload})
        }
        case UPDATE_CITY: {
            return Object.assign({},state,{city: action.payload})
        }
        case UPDATE_STATES: {
            return Object.assign({},state,{states: action.payload})
        }
        case UPDATE_ZIP: {
            return Object.assign({},state,{zipcode: action.payload})
        }
        case UPDATE_IMAGE: {
            return Object.assign({},state,{image: action.payload})
        }
        case RESET_STATE:{
            return Object.assign({}, action.payload)
        }
        // case UPDATE_MONTHLY: {
        //     return Object.assign({},state,{monthly: action.payload})
        // }
        // case UPDATE_RENT: {
        //     return Object.assign({},state,{rent: action.payload})
        // }
        default: return state
    }
}

export function updateName(name){
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city){
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateImage(image){
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}

export function updateZip(zipcode){
    return {
        type: UPDATE_ZIP,
        payload: zipcode
    }
}

export function updateStates(states){
    return {
        type: UPDATE_STATES,
        payload: states
    }
}

export function resetState(initialState){
    return {
        type:RESET_STATE,
        payload: initialState
    }
}

// export function updateMonthly(monthly){
//     return {
//         type: UPDATE_MONTHLY,
//         payload: monthly
//     }
// }

// export function updateRent(rent){
//     return {
//         type: UPDATE_RENT,
//         payload: rent
//     }
// }

export default reducer
