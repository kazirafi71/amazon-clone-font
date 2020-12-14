import {combineReducers} from 'redux'
import cartReducer from '../Cart/CartReducer'
import authReducers from './authReducer'

const rootReducer = combineReducers({
    auth: authReducers,
    cart: cartReducer
})

export default rootReducer