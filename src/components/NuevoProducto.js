import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Action Redux
import { crearNuevoProductoAction } from '../action/productoAction';


export const NuevoProducto = () => {

    // State del componente
    const [ nombre , guardarNombre ] = useState('');
    const [ precio , guardarPrecio ] = useState(0);


    // UseDispatch te crea o devuelve una funcion. Puedo usarlo en una funcion para llamar otra funcion.
    const dispatch = useDispatch();

    // Llamar el action de productoAction
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) )

    const submitNuevoProducto = e => {
        e.preventDefault();

        // Validar form
        if(nombre.trim() === '' || precio <= 0){
            return;
        }

        // Si no hay Errores

        // Crear nuevo producto
        agregarProducto({
            nombre,
            precio
        })
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto
                        </h2>

                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className='form-group'>
                                <label>
                                    Nombre Producto
                                </label>
                                <input 
                                className='form-control'
                                placeholder='Nombre Producto'
                                type='text'
                                name='nombre'
                                value={nombre}
                                onChange={e => guardarNombre(e.target.value)}
                                 />
                            </div>

                            <div className='form-group'>
                                <label>
                                    Precio Producto
                                </label>
                                <input 
                                className='form-control'
                                placeholder='Precio Producto'
                                type='number'
                                name='precio'
                                value={precio}
                                onChange={e => guardarPrecio(Number(e.target.value))}
                                 />
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary text-upercase font-weight-bold d-block w-100'
                            >
                                AGREGAR
                            </button>

                        </form>
                </div>
            </div>

        </div>
    </div>
  )
}
