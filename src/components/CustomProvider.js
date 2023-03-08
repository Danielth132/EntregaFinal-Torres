import { createContext, useContext, useState } from "react"
import Swal from "sweetalert2"

export const contexto = createContext()

const Provider = contexto.Provider 

export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CustomProvider = ({children}) => {

    const [ carrito, setCarrito ] = useState([])
    const [ totalProductos, setTotalProductos ] = useState(0)

    const agregarProducto = (item,cantidad) => {
        if (estaEnCarrito(item.id)) {
            setCarrito(carrito.map(product => {
                return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad } : product
                
            } ))
        } else {
            setCarrito([...carrito,{ ...item, cantidad}])
        }
    }

    const eliminarProductos = (id,cant) => {
        setCarrito(carrito.filter(product => product.id !== id ))
        setTotalProductos(totalProductos - cant)
    }

    const vaciarCarrito = () => {
        
        Swal.fire({
            title: '¿Estas seguro?',
            text: 'Se eliminaran todos los productos del carrito',
            icon: 'info',
            showCancelButton: true,
            cancelButtonText: 'Rechazar',
            confirmButtonText: 'Aceptar',
            iconColor: 'red'
          }).then((result) => {
            if (result.isConfirmed) {
                setCarrito([])
                setTotalProductos(0)
    
            } else {
                
            }
          })
    }
    const estaEnCarrito = (id) => {
        return carrito.find(product =>product.id === id) ? true : false
    }

    const valorDelProvider = {
        carrito,
        totalProductos,
        setTotalProductos,
        vaciarCarrito,
        eliminarProductos,
        estaEnCarrito,
        agregarProducto,
    }
    return (
        <Provider value={valorDelProvider} >
            {children}
        </Provider>
    )
}

export default CustomProvider;