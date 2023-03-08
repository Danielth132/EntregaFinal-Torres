import { useCarrito } from "./CustomProvider"

const ItemCart = ({product}) => {
    const { eliminarProductos } = useCarrito()
    return (
        <div className="itemCart">
            <img src={product.image} alt={product.title} />
            <div>
                <p>Titulo: {product.title} </p>
                <p>Cantidad: {product.cantidad} </p>
                <p>Precio unidad: ${product.price} </p>
                <p>Subtotal: ${product.cantidad * product.price} </p>
                <button onClick={()=>eliminarProductos(product.id, product.cantidad)} >Eliminar</button>

            </div>
        </div>
    )
}
export default ItemCart