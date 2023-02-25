import { act } from 'react-dom/test-utils'
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR
} from '../types'


// Cada reducer tiene su propio state
const initialState = {
    producto: [],
    error: null,
    loading: false,
    productoeliminar: null,
    productoeditar: null
}

export default function (state = initialState, action){
    switch(action.type){

        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO: 
            return {
                ...state,
                loading: action.payload
            }

        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                producto: [...state.producto, action.payload]
            }
        
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }

        case DESCARGA_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                producto: action.payload
            }

        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoeliminar: action.payload
            }

        case PRODUCTO_ELIMINADO_EXITO:
            return{
                ...state,
                producto: state.producto.filter(producto => producto.id !== state.productoeliminar),
                productoeliminar: null
            }

        case OBTENER_PRODUCTO_EDITAR:
            return{
                ...state,
                productoeditar: action.payload
            }

        default:
            return state;
    }
}