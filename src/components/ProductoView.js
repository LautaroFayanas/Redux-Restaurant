import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

// Redux
import { useDispatch } from "react-redux"
import { borrarProductoAction, obtenerProductoEditar } from "../action/productoAction"


export const ProductoView = ({ producto }) => {

    const { nombre, precio, id } = producto

    const dispatch = useDispatch();
    const navigate = useNavigate();   //Habilita History para redireccion

    // Confirmar Si Desea Eliminarlo
    const confirmarEliminarProducto = id =>{

        // Preguntarle al usuario
        // Codigo Copiado de SweetAlert
        Swal.fire({
            title: 'Estas seguro?',
            text: "Este producto no se podra recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                
                // Pasarlo al action
                dispatch( borrarProductoAction(id));

            }
          })

    }


    // Funcion que redirige de forma programada
    const redericcionarEdicion = producto => {
        dispatch( obtenerProductoEditar(producto))
        navigate(`/productos/editar/${id}`)
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={ () => redericcionarEdicion(producto)}
                    className='btn btn-primary mr-2'>
                        Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
