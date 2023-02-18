import {combineReducers} from 'redux';
import productoReducer from './productoReducer';

export default combineReducers({
    producto: productoReducer      
})