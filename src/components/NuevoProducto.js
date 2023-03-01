import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

// Action Redux
import { crearNuevoProductoAction } from '../action/productoAction';
import { mostrarAlerta , ocultarAlertaAction } from '../action/alertaAction';




export const NuevoProducto = () => {

    // State del componente
    const [ nombre , guardarNombre ] = useState('');
    const [ precio , guardarPrecio ] = useState(0);

    // Redireccionar
    const navigate = useNavigate();

    // UseDispatch te crea o devuelve una funcion. Puedo usarlo en una funcion para llamar otra funcion.
    const dispatch = useDispatch();

    // Acceder al State del Store
    const cargando = useSelector( state => state.producto.loading )
    const error = useSelector( state => state.producto.error)
    const alerta = useSelector( state => state.alerta.alerta)

    // Llamar el action de productoAction
    const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) )

    const submitNuevoProducto = e => {
        e.preventDefault();

        // Validar form
        if(nombre.trim() === '' || precio <= 0){

            const respuesta = {
                msg: 'Ambos campos son obligatorios',
                clases: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch( mostrarAlerta(respuesta) ) 

            return;
        }

        // Si no hay Errores
        dispatch( ocultarAlertaAction() )

        // Crear nuevo producto
        agregarProducto({
            nombre,
            precio
        })

        // Redericcionar    
        navigate('/')
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto
                        </h2>

                        { alerta ? <p className={alerta.clases}> {alerta.msg} </p> : null }

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


                        {

                            cargando ? <p>Cargando...</p> : null

                        }

                        {

                        error ? <p className='alert alert-danger p2 mt-4 text-center'
                        >Hubo un error</p> : null

                        }


                </div>
            </div>

        </div>
    </div>
  )
}
