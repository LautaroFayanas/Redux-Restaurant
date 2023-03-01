import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { editarProductoAction } from "../action/productoAction";



export const EditarProducto = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch(); 

    // Nuevo State de Producto
    const [ producto , guardarProducto ] = useState({
        nombre: '',
        precio: ''
    })

    // Producto a editar
    const productoeditar = useSelector(state => state.producto.productoeditar)

    // Llenar el STATE automaticamente 
    useEffect(() => {
      guardarProducto(productoeditar)
    }, [productoeditar]);

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }
    

    const { nombre , precio  } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();

       dispatch(editarProductoAction(producto));

       navigate('/')
    }

    return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={submitEditarProducto}
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
                                onChange={onChangeFormulario}
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
                                onChange={onChangeFormulario}
                                 />
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary text-upercase font-weight-bold d-block w-100'
                            >
                                GUARDAR
                            </button>

                        </form>
                </div>
            </div>

        </div>
    </div>
  )
}
