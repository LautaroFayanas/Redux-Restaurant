import { useDispatch, useSelector } from "react-redux"

export const EditarProducto = () => {

    // Producto a editar
    const producto = useSelector(state => state.producto.productoeditar)
    
    if(!producto) return null;

    const { nombre , precio , id } = producto

    return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Editar Producto
                        </h2>

                        <form>
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
