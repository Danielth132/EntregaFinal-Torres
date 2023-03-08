import { toast } from "react-toastify";
import { useCarrito } from "./CustomProvider";
import ItemCount from "./ItemCount";


const ItemDetail = ({producto, id}) => {

    

    const {agregarProducto, totalProductos, setTotalProductos} = useCarrito()
    const onAdd = (contador) => {
        producto = {...producto,id:id}

        agregarProducto(producto,contador)
        setTotalProductos(totalProductos + contador)

        toast(`Agregaste ${contador} unidades`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    

    return ( 
        <div>
            <article key={producto.id}>
                    <h3>{producto.title}</h3>
                    <img src={producto.image} alt={producto.title} />
                    <p>${producto.price}</p>
                    <p>{producto.description}</p>
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
            </article>
        </div>
     );
}
 
export default ItemDetail;