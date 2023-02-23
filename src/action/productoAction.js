import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO
} from '../types'

import Swal from 'sweetalert2'
import clienteAxios from '../config/axios'

// Crear nuevo Productos

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch( agregarProducto() )

        try {
                // Insertar en la API 
               await clienteAxios.post('/productos', producto);
            
                // Si todo sale bien, actualizar el state
                dispatch(agregarProductoExisto() )

                // Alerta
                Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
                )


        } catch (error) {

                // Si hay un error , cambiar el state
                dispatch( agregarProductoError(true) )

                // Alerta de error
                Swal.fire({
                    icon: 'Error',
                    title: 'Hubo un error',
                    text: 'Intenta de nuevo'
                })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExisto = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});


// Funcion que descarga los productos de BD
export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch( descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargaProductosExitosa(respuesta.data))
        } catch (error) {
            console.log(error);
            dispatch( descargarProductosError())
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})