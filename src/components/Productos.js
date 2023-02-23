import { Fragment, useEffect } from "react"

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { obtenerProductosAction } from "../action/productoAction"
import { ProductoView } from "./ProductoView"


const Productos = () => {


  const dispatch = useDispatch()

  useEffect(() => {

    // Consultar la api
    const cargarProductos = () => dispatch(obtenerProductosAction());

    cargarProductos()

  }, [])

  // Obtener el state
  const productos = useSelector(state => state.producto.producto);
  const error = useSelector(state => state.producto.error)
  const cargando = useSelector(state => state.producto.loading)

  return (
    <Fragment>
      <h2 className="text-center my-5">
        Listado de Productos
      </h2>

      {error ? <p className="font-weight-bold alert alert-danger text-center mt-4"> Hubo un error </p> : null}

      {cargando ? <p className="text-center"> Cargando... </p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {
            productos.length === 0 ? 'No hay productos' : (
              productos.map(producto => (
                <ProductoView
                  key={producto.id}
                  producto={producto}
                />
              ))
            )
          }
        </tbody>
      </table>
    </Fragment>
  )
}

export default Productos
